import { useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import GalleryCategory from "../../components/GalleryCategory/GalleryCategory";
import { GalleryLoadingSkeleton, CategoriesLoadingSkeleton } from "../../components/LoadingSkeleton/LoadingSkeleton";
import { useGetGalleryQuery, useGetCategorysQuery } from "../../store/api";
import SEO from "../../components/SEO/SEO";

const Catalog = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const { data, error, isLoading } = useGetGalleryQuery();
  const { data: categoriesData, error: categoriesError, isLoading: categoriesIsLoading } = useGetCategorysQuery();

  if (error || categoriesError) return <p>Ошибка загрузки данных.</p>;

  const filteredData = selectedCategoryId
    ? {
        ...data,
        data: data?.data?.filter((item) => 
          item.categories?.some((cat) => cat.id === selectedCategoryId)
        ),
      }
    : data;

  return (
    <>
      <SEO
        title="Каталог декоративных покрытий - Chepurnov Decor"
        description="Каталог декоративных штукатурок и внутренних покрытий. Более 100+ видов текстур. Профессиональное качество и долговечность."
        keywords="каталог декоративной штукатурки, виды покрытий, текстуры, отделка"
        url="https://chepurnov-decor.ru/catalog"
        type="website"
      />
      <>
        {/* Показываем скелетон категорий при загрузке, иначе компонент категорий */}
        {categoriesIsLoading ? (
          <CategoriesLoadingSkeleton />
        ) : (
          <GalleryCategory
            categories={categoriesData?.data}
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={setSelectedCategoryId}
          />
        )}
        
        {/* Показываем скелетон карточек при загрузке, иначе галерею */}
        {isLoading ? (
          <GalleryLoadingSkeleton />
        ) : (
          <Gallery items={filteredData} />
        )}
      </>
    </>
  );
};

export default Catalog;
