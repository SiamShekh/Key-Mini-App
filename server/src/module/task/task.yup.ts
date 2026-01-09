import { object, string } from "yup";


export const taskSchema = object({
    title: string().required().min(12).max(30),
    link: string().required().url(),
    bgImage: string().required().url(),
    category: string().oneOf(["telegram", "twitter", "youtube", "facebook", "others"]).required()
});