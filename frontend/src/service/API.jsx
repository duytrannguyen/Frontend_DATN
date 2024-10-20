import instance from "../config/axios";
import { GET_SELLER, GET_USER, LOGIN, REGISTER } from "../constant/APIConstant";

export const loginService = async (email, password) => {
  return await instance.post("/user" + LOGIN, {
    email: email,
    password: password,
  });
};
export const validateTokenService = (token) => {
  return instance.post('/user/validate-token', { token });
};

export const getProvinces = async () => {
  return await instance.get("/provinces");
};

export const getDistricts = async (provinceId) => {
  return await instance.get(`/districts/${provinceId}`);
};

export const getCommunes = async (districtId) => {
  return await instance.get(`/commune/${districtId}`);
};

export const registerService = async (email, password) => {
  return await instance.post("/user" + REGISTER, {
    email: email,
    password: password,
  });
};

export const getUserService = async () => {
  return await instance.get(GET_USER);
};

export const getAddressesService = async (id) => {
  return await instance.get("/v1/get-addresses/" + id);
};

export const addAddressService = async (id, data) => {
  const src = {
    idProvince: data.idProvince,
    idDistrict: data.idDistrict,
    idCommune: data.idCommune,
    streetName: data.streetName,
    province: data.province,
    district: data.district,
    commune: data.commune,
  };
  return await instance.post("/v1/addAddress/" + id, src);
};

export const forgotPasswordService = async (email) => {
  return await instance.post("/user/forgot-Password/" + email);
};

export const deleteAddressService = async (id, addressId) => {
  return await instance.delete("/v1/deleteAddress/" + id + "/" + addressId);
};
export const getSellerService = async () => {
  return await instance.get(GET_SELLER);
};
export const editService = async (id, data, profilePicture) => {
  console.log(profilePicture.originFileObj);
  var formData = new FormData();
  formData.append("profilePicture", profilePicture.originFileObj);
  formData.append(
    "userRequest",
    new Blob(
      [
        JSON.stringify({
          userName: data.userName,
          phoneNumber: data.phone,
          fullName: data.fullName,
          gender: data.gender,
          birthDate: new Date(data.birthDate.$d).toLocaleDateString("en-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
        }),
      ],
      { type: "application/json" }
    )
  );

  return await instance.put("/v1/edit/" + id, formData);
};

export const changePasswordService = async (id, data) => {
  const src = {
    currentPassword: data.passwordOld,
    newPassword: data.passwordNew,
    confirmNewPassword: data.ConfirmPasswordNew,
  };
  console.log(src);
  return await instance.put("/v1/change-password/" + id, src);
};

export const getTokenGoogle = async (code) => {
  return await instance.get("/user/getTokenGoogle", {
    params: {
      code: code,
    },
  });
};

export const getGoogleUserInfo = async (token) => {
  return await instance.get("/user/getGoogleUserInfo", {
    params: {
      accessToken: token,
    },
  });
};
