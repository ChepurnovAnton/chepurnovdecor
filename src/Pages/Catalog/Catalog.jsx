import { useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import GalleryCategory from "../../components/GalleryCategory/GalleryCategory";
import { GalleryLoadingSkeleton, CategoriesLoadingSkeleton } from "../../components/LoadingSkeleton/LoadingSkeleton";
import { useGetGalleryQuery, useGetCategorysQuery } from "../../store/api";


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
