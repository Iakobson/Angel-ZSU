// @/views/Home/FundBlog.tsx
import Box from '@mui/material/Box';
import SectionHeader from '@/views/Common/SectionHeader';
import AwardsGrid from '@/views/Home/blog/AwardsGrid';

const FundBlog = () => {
  return (
    <Box id="fund-blog" sx={{ pb:3 }} >
      <SectionHeader
        title="Набір подяк для фонду"
        description="Усі сертифікати - є символом визнання нашої спільної місії та
          доказом того, як разом ми здатні сприяти нашим захисникам."
      />
      {/* Додатковий вміст вашого розділу */}
      <AwardsGrid />
    </Box>
  );
};
export default FundBlog;