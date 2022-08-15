/* eslint-disable no-param-reassign */
import React from "react"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import PropTypes from "prop-types"
import logoMain from "./assets/logo/logo-main.svg"
import logoDark from "./assets/logo/logo-dark.svg"
import logoLight from "./assets/logo/logo-light.svg"

const siteInfoSlice = createSlice({
  initialState: {
    headerInfo: {
      logo: {
        main: logoMain,
        dark: logoDark,
        light: logoLight,
      },
      nav: [
        { name: "Home", to: "/" },
        { name: "Which Page", to: "/which" },
        { name: "Category", to: "/category/1" },
        { name: "Profile", to: "/profile" },
      ],
      subNav: [
        { name: "Delivery & Returns", to: "/delivery-and-returns" },
        { name: "Warranty", to: "/warranty" },
        { name: "45 day trial", to: "/trial" },
      ],
    },
    regionInfo: {
      region: null,
      currency: null,
      options: [
        { value: "Austria", label: "Austria €" },
        { value: "Czechia", label: "Czechia €" },
        { value: "Denmark", label: "Denmark €" },
        { value: "Estonia", label: "Estonia €" },
        { value: "Finland", label: "Finland €" },
        { value: "Italy", label: "Italy €" },
        { value: "Ireland", label: "Ireland €" },
        { value: "Luxembourg", label: "Luxembourg €" },
        { value: "Monaco", label: "Monaco €" },
        { value: "United States", label: "United States $" },
      ],
      placeholder: "Location...",
      isDisabled: false,
    },
    socialIcons: [
      { name: "FaFacebook", to: "https://facebook.com" },
      { name: "FaInstagram", to: "https://instagram.com" },
      { name: "FaTwitter", to: "https://twitter.com" },
      { name: "FaTiktok", to: "https://tiktok.com" },
    ],
    footerInfo: {
      heading: "About Lumie",
      text: "Founded in Cambridge, Great Britain, in 1991, Lumie is a light therapy brand on a global mission to empower you to tune into your natural rhythms for best-ever sleep, mood and energy. Based on decades of research, Lumie lights deliver swift results - right out of the box and for the years to come.",
      scrollText: "BACK TO TOP",
      social: [
        { name: "FaFacebook", to: "/" },
        { name: "FaInstagram", to: "/" },
        { name: "FaTwitter", to: "/" },
        { name: "FaTiktok", to: "/" },
      ],
      menu: [
        {
          title: "Shop",
          list: [
            { name: "Sleep/Wake-up Lights", to: "/", value: "fgfg" },
            { name: "Bodyclock Rise 100", to: "/" },
            { name: "Bodyclock Glow 150", to: "/" },
            { name: "Bodyclock Shine 300", to: "/" },
            { name: "Bright Light Therapy", to: "/" },
            { name: "Replacement parts", to: "/" },
          ],
        },
        {
          title: "About",
          list: [
            { name: "Our story", to: "/" },
            { name: "What is SAD?", to: "/" },
            { name: "Light therapy for better sleep", to: "/" },
            { name: "What is a circadian rhythm?", to: "/" },
            { name: "Blog", to: "/" },
            { name: "Press", to: "/" },
          ],
        },
        {
          title: "Support",
          list: [
            { name: " QUIZ: Which light is right for me?", to: "/" },
            { name: "Orders and Payments", to: "/" },
            { name: "Delivery and Returns", to: "/" },
            { name: "45-day Trial", to: "/" },
            { name: "Warranty", to: "/" },
          ],
        },
        {
          title: "For business",
          list: [
            { name: "Light therapy in your workplace", to: "/" },
            { name: "Coroporate gifting", to: "/" },
            { name: "Become a Lumie stockist", to: "/" },
          ],
        },
        {
          title: "Contact",
          list: [
            {
              name: "For help and advice, or to tell us how you are getting on, reach us on info@lumie.com",
              to: "/",
            },
          ],
        },
      ],
      form: [
        {
          title: "Join good mood club",
          text: "Find out about our offers, product launches, wellbeing tips and inspiration",
          caption: "No more than 2-3 emails per month",
          buttonLabel: "Sign up",
          buttonInputPh: "Your e-mail address",
        },
      ],
      someInfo: [
        {
          list: [
            { name: "Privacy Policy", to: "/" },
            { name: "Terms and conditions", to: "/" },
            { name: "Cookies", to: "/" },
          ],
          text: "Lumie LLC, 4600 140th Avenue N Suite 180, Clearwater, FL 33762 © Lumie 2022. All rights reserved.",
        },
      ],
    },
  },
  name: "siteInfo",
  reducers: {
    setRegion(state, action) {
      state.regionInfo.region = action.payload
      state.regionInfo.currency =
        action.payload === "United States" ? "usd" : "eur"
    },
  },
})

const userSlice = createSlice({
  initialState: {
    authorized: false,
    userInfo: null,
  },
  name: "user",
})
const cartSlice = createSlice({
  initialState: {
    cartItems: [],
  },
  name: "cart",
})

export const store = configureStore({
  reducer: {
    siteInfo: siteInfoSlice.reducer,
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
})

export function Store(props) {
  const { children } = props
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = {
  /**
   * Content to put inside block.
   * Could be any react node
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
