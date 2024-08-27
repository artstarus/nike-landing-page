import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Locations' },
    { value: '500+', label: 'Affiliates' },
    { value: '10M+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Zoom",
        price: "$190.00",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Force 1",
        price: "$112.00",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Max 720",
        price: "$179.00",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan 1",
        price: "$240.00",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free Shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping services."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payments",
        subtext: "Experience worry-free transactions with our secure payment plans and options."
    },
    {
        imgURL: support,
        label: "24/7 Customer Support",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'David Brown',
        rating: 4.5,
        feedback: "These shoes have completely transformed my workouts! The comfort and support they provide are unmatched, making every run feel effortless. I’ve never felt more confident in my stride."
    },
    {
        imgURL: customer2,
        customerName: 'Laura Jonsdottir',
        rating: 4.8,
        feedback: "I’m blown away by the quality and design of these sneakers. They not only look fantastic but also offer incredible durability and performance. My feet have never felt better, even after long hours of wear."
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 720", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Nike Zoom", link: "/" },
            { name: "Nike Air Max 97", link: "/" },
            { name: "Nike SB Dunks", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "1-800-806-6453", link: "tel:1-800-806-6453" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];