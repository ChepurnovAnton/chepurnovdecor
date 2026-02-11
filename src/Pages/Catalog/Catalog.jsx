import { useState, useEffect } from "react";
import Gallery from "../../components/Gallery/Gallery";
import GalleryCategory from "../../components/GalleryCategory/GalleryCategory";
import { GalleryLoadingSkeleton, CategoriesLoadingSkeleton } from "../../components/LoadingSkeleton/LoadingSkeleton";
import { useGetGalleryQuery, useGetCategorysQuery } from "../../store/api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Pagination from "../../components/Pagination/Pagination";

const Catalog = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [currentPage, setCurrentPage] = useState(() => {
    try {
      const stored = sessionStorage.getItem("catalogPage");
      const p = stored ? parseInt(stored, 10) : 1;
      return !isNaN(p) && p > 0 ? p : 1;
    } catch (e) {
      return 1;
    }
  });
  const itemsPerPage = 8;
  
  const { data, error, isLoading } = useGetGalleryQuery();
  const { data: categoriesData, error: categoriesError, isLoading: categoriesIsLoading } = useGetCategorysQuery();

  if (error || categoriesError) return <ErrorMessage />;

  const filteredData = selectedCategoryId
    ? {
        ...data,
        data: data?.data?.filter((item) => 
          item.categories?.some((cat) => cat.id === selectedCategoryId)
        ),
      }
    : data;

  // Расчитываем общее количество страниц
  const totalItems = filteredData?.data?.length ?? 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Сбрасываем страницу на 1 при смене категории
  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setCurrentPage(1);
    try {
      sessionStorage.setItem("catalogPage", "1");
    } catch (e) {
      // ignore
    }
  };

  // Скролим к верхушке при смене страницы
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  // Сохраняем текущую страницу в sessionStorage, чтобы её можно было восстановить при возврате
  useEffect(() => {
    try {
      sessionStorage.setItem("catalogPage", String(currentPage));
    } catch (e) {
      // ignore
    }
  }, [currentPage]);

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
            onSelectCategory={handleCategoryChange}
          />
        )}
        
        {/* Показываем скелетон карточек при загрузке, иначе галерею */}
        {isLoading ? (
          <GalleryLoadingSkeleton />
        ) : (
          <>
            <Gallery 
              items={filteredData} 
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
            />
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </>
    </>
  );
};

export default Catalog;
