import axios from "../../../serviceAxios/axios";

const fetchAllCategories = async () => {
    try {
        const response = await axios.get('/api/seller/categories/list');
        return {
            data: response.data
        };
    } catch (error) {
        console.error('Error fetching categories:', error);
        return {
            data: [],
            // total: 0,
            // total_pages: 0
        };
    }
};

export { fetchAllCategories };