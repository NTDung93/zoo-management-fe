import axios, { AxiosError, AxiosResponse } from "axios";
import { router } from "../router/Router";
import { toast } from "react-toastify";
import { CartItemObj } from "../models/cart";
import { OrderObj } from "../models/order";
const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));

axios.defaults.baseURL = "http://localhost:5000/api/";
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(
    async (response) => {
        await sleep();
        return response;
    },
    (error: AxiosError) => {
        const { data, status } = error.response as AxiosResponse;
        switch (status) {
            case 400:
                if (data.errors) {
                    const modelStateError: string[] = [];
                    for (const key in data.errors) {
                        if (data.errors[key]) {
                            modelStateError.push(data.errors[key]);
                        }
                    }
                    throw modelStateError.flat();
                }
                toast.error(data.title);
                break;
            case 401:
                toast.error(data.title);
                break;
            case 404:
                toast.error(data.title);
                break;
            case 500:
                router.navigate("/server-error", { state: { error: data } });
                break;
            default:
                toast.error("Something unexpected went wrong");
                break;
        }
        return Promise.reject(error.response);
    }
);

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    // eslint-disable-next-line @typescript-eslint/ban-types
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    // eslint-disable-next-line @typescript-eslint/ban-types
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
};

const News = {
    list: () => requests.get("News/load-news"),
    details: (id: number) => requests.get(`News/get-news?id=${id}`),
};

const Animals = {
    list: () => requests.get("Animals/animals"),
    details: (id: string) => requests.get(`Animals/animal?id=${id}`),
    search: (animalName: string) => requests.get(`search-animals?animalName=${animalName}`),
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Species = {
    list: () => requests.get("AnimalSpecies/species"),
};


const Tickets = {
    list: () => requests.get("Tickets/tickets"),
};
const Payments = {
    create: (cartItems: CartItemObj[]) => requests.post("Payments/create-checkout-session", cartItems),
    createOrder: (order: OrderObj) => requests.post("Payments/create-order", order),
};

const agent = {
    News, Animals, Tickets, Payments,Species
};

export default agent;
