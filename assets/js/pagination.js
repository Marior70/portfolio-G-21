const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll("li");

const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 10;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const appendPageNumber = (index) => {
   const pageNumber = document.createElement("button");
   pageNumber.className = "pagination-number";
   pageNumber.innerHTML = index;
   pageNumber.setAttribute("page-index", index);
   pageNumber.setAttribute("aria-label", "Page " + index);

   paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
   for (let i = 1; i <= pageCount; i++) {
      appendPageNumber(i);
   }
};

const handleActivePageNumber = () => {
   document.querySelectorAll(".pagination-number").forEach((button) => {
      button.classList.remove("active");
      const pageIndex = Number(button.getAttribute("page-index"));
      if (pageIndex == currentPage) {
         button.classList.add("active");
      }
   });
};

const setCurrentPage = (pageNum) => {
   currentPage = pageNum;
   handleActivePageNumber();

   const prevRange = (pageNum - 1) * paginationLimit;
   const currRange = pageNum * paginationLimit;

   listItems.forEach((item, index) => {
      item.classList.add("hidden");
      if (index >= prevRange && index < currRange) {
         item.classList.remove("hidden");
      }
   });
};

window.addEventListener("load", () => {
   getPaginationNumbers();
   setCurrentPage(1);

   document.querySelectorAll(".pagination-number").forEach((button) => {
      const pageIndex = Number(button.getAttribute("page-index"));

      if (pageIndex) {
         button.addEventListener("click", () => {
            setCurrentPage(pageIndex);
         });
      }
   });
});

/* 
jsonData.forEach((item, index) => {
   elementContainer.innerHTML = ''
   if (index >= prevRange && index < currRange) {
      elementContainer.appendChild(item)
   }
});
 */
/* 
window.addEventListener("load", () => {
	getPaginationNumbers();
});
 */
/* 
const setCurrentPage = (pageNum) => {
	currentPage = pageNum;
};
 */
/* 
const setCurrentPage = (pageNum) => {
	currentPage = pageNum;
	const prevRange = (pageNum - 1) * paginationLimit;
	const currRange = pageNum * paginationLimit;
};
 */