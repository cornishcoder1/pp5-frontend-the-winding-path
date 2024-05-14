import { rest } from "msw";

const baseURL = "https://pp5-backend-drf-the-winding-path.onrender.com"
// const baseURL = "postgres://windingpathdb_owner:Upd6SGCy4rYw@ep-spring-term-a22ni9dt.eu-central-1.aws.neon.tech/thewindingpathdb?sslmode=require";

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