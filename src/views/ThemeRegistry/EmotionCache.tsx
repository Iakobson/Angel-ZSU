// @/views/ThemeRegistry/EmotionCache.tsx
'use client';
import * as React from 'react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider as DefaultCacheProvider } from '@emotion/react';
import type { EmotionCache, Options as OptionsOfCreateCache } from '@emotion/cache';

export type NextAppDirEmotionCacheProviderProps = {
  /** to createCache() from 'import createCache from "@emotion/cache"' */
  options:Omit<OptionsOfCreateCache, 'insertionPoint'>;
  /** By default <CacheProvider /> from 'import { CacheProvider } from "@emotion/react"' */
  CacheProvider?:(props:{
    value:EmotionCache;
    children:React.ReactNode;
  })=>React.JSX.Element | null; // CacheProvider component for Emotion
  children:React.ReactNode; // Child components
};

// Function that creates a custom Emotion cache provider
// Adapted from https://github.com/garronej/tss-react/blob/main/next/appDir.tsx
export default function NextAppDirEmotionCacheProvider(props:NextAppDirEmotionCacheProviderProps) {
  const { options, CacheProvider = DefaultCacheProvider, children } = props;
  // State to manage the Emotion cache and inserted styles
  const [registry] = React.useState( () => {
    const cache = createCache(options); // Creating Emotion cache with provided options
    cache.compat = true; // Ensuring compatibility
    const prevInsert = cache.insert;
    let inserted:{ name:string; isGlobal:boolean }[] = [];
    // Modifying cache.insert to track inserted styles
    cache.insert = (...args) => {
      const [selector, serialized] = args;
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push({
          name: serialized.name,
          isGlobal: !selector,
        });
      }
      return prevInsert(...args);
    };
    // Function to flush inserted styles
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  } );
  // Hook to handle server-inserted HTML (for Next.js navigation)
  useServerInsertedHTML(() => {
    const inserted = registry.flush();
    // Processing inserted styles
    if (inserted.length === 0) {
      return null;
    }
    let styles = '';
    let dataEmotionAttribute = registry.cache.key;

    const globals:{
      name:string;
      style:string;
    }[] = [];

    inserted.forEach(({ name, isGlobal }) => {
      const style = registry.cache.inserted[name];

      if (typeof style !== 'boolean') {
        if (isGlobal) {
          globals.push({ name, style });
        } else {
          styles += style;
          dataEmotionAttribute += ` ${name}`;
        }
      }
    });
    // Generating styles and global styles for server-inserted HTML
    return (
      <React.Fragment>
        {globals.map(({ name, style }) => (
          <style
            key={name}
            data-emotion={`${registry.cache.key}-global ${name}`}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style }} // Setting HTML for global styles
          />
        ))}
        {styles && (
          <style
            data-emotion={dataEmotionAttribute}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: styles }} // Setting HTML for non-global styles
          />
        )}
      </React.Fragment>
    );
  });
  // Providing the custom cache to CacheProvider for child components
  return <CacheProvider value={registry.cache}>{children}</CacheProvider>;
}
/*
This component serves as a custom cache provider for Emotion,
a CSS-in-JS library used by Material-UI for styling components.

This file creates a custom Emotion cache provider
that manages server-inserted HTML styles and global styles
for components within a Next.js application.

This is done to ensure proper styling and compatibility,
especially during server-side rendering and navigation transitions.

The code tracks and handles inserted styles,
ensuring they are properly applied to the rendered components.
*/