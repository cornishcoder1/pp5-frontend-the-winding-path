import { rest } from "msw";

const baseURL = "https://the-winding-path-drf-api.herokuapp.com"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
          ctx.json({
            pk: 2,
            username: "Leah",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 2,
            profile_image: "https://res.cloudinary.com/dexhos525/image/upload/v1/media/images/Selfie-beach_tjeyy0"
            })
        );
      }),
      rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
      }),
];