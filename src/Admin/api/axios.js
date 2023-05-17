import axios from "./request.js";

// import axios from "./requet";
export const login = (values) => {
  return axios.post(`/api/auth/login`, values);
};

export const getAllProduct = async () => {
  try {
    const response = await axios.get(
      "/prod/all/0/2",
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjAxIiwiZXhwI…rtQykYDVFwl17G3Iwt7ALeMEc7ByOQkGn6lqSopFtxLm4o3ug"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const createProduct = async (data) => {
  try {
    const response = await axios.post("/prod/create", data);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Call api User
export const getAllUser = async (pageCureent) => {
  try {
    const res = await axios.post("/api/users/list", pageCureent);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addUser = (data) => {
  return axios.post("/api/users/create", data);
};

export const findUser = async (id) => {
  try {
    const res = await axios.get(`/prod/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
// Call api product :
export const findProduct = async (id) => {
  try {
    const res = await axios.get(`/prod/${id}`);

    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getProduct = async (condition) => {
  const res =  axios.post("/prod/filter/", condition);
  // console.log(res);
  return res;
};

export const sortProduct = async (condition) =>{
  const res = await axios.post('/prod/sort/' , condition);
  // console.log(res);
  return res ;
}
