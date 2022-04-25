import axios from '../custom-axios/axios';

const EShopService = {
    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, availableCopies, category, author) => {
        return axios.post("/books/add", {
            "name": name,
            "availableCopies": availableCopies,
            "category": category,
            "author": author
        });
    },
    editBook: (id, name, availableCopies,category, author) => {
        return axios.put(`/books/edit/${id}`, {
            "name": name,
            "availableCopies": availableCopies,
            "category": category,
            "author": author
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
}

export default EShopService;
