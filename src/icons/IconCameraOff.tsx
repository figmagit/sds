import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconCameraOff = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12705)"><path fillRule="evenodd" clipRule="evenodd" d="M0.136418 0.136296C0.429311 -0.156597 0.904185 -0.156597 1.19708 0.136296L4.53003 3.46924C4.53028 3.4695 4.53054 3.46976 4.5308 3.47001L6.99978 5.939C7.00658 5.94554 7.01327 5.95223 7.01985 5.95907L10.7076 9.64686C10.7145 9.65344 10.7212 9.66013 10.7277 9.66693L14.5299 13.4692C14.5303 13.4695 14.5306 13.4698 14.5309 13.4701L15.8637 14.803C16.1566 15.0959 16.1566 15.5707 15.8637 15.8636C15.5709 16.1565 15.096 16.1565 14.8031 15.8636L13.6894 14.75H2.00008C1.44755 14.75 0.917642 14.5305 0.526942 14.1398C0.136241 13.7491 -0.083252 13.2192 -0.083252 12.6666V5.33329C-0.083252 4.78076 0.136241 4.25085 0.526942 3.86015C0.917643 3.46945 1.44755 3.24996 2.00008 3.24996H2.18942L0.136418 1.19696C-0.156475 0.904063 -0.156475 0.429189 0.136418 0.136296ZM3.68942 4.74996H2.00008C1.84537 4.74996 1.697 4.81142 1.5876 4.92081C1.47821 5.03021 1.41675 5.17858 1.41675 5.33329V12.6666C1.41675 12.8213 1.47821 12.9697 1.5876 13.0791C1.697 13.1885 1.84537 13.25 2.00008 13.25H12.1894L10.2121 11.2726C10.0587 11.4044 9.89349 11.5226 9.71818 11.6257C9.28546 11.8803 8.80197 12.0363 8.3021 12.0827C7.80224 12.1292 7.29828 12.0649 6.82607 11.8945C6.35386 11.7241 5.92501 11.4517 5.57003 11.0967C5.21505 10.7417 4.94265 10.3128 4.77223 9.84064C4.6018 9.36843 4.53752 8.86447 4.58397 8.3646C4.63042 7.86473 4.78645 7.38125 5.04097 6.94853C5.14408 6.77322 5.26233 6.608 5.39407 6.45461L3.68942 4.74996ZM6.46019 7.52073C6.41453 7.5808 6.37234 7.64365 6.3339 7.709C6.19112 7.95175 6.10359 8.22297 6.07754 8.50339C6.05148 8.7838 6.08754 9.06651 6.18314 9.33141C6.27875 9.59631 6.43156 9.83688 6.63069 10.036C6.82983 10.2352 7.0704 10.388 7.3353 10.4836C7.60019 10.5792 7.88291 10.6152 8.16332 10.5892C8.44373 10.5631 8.71496 10.4756 8.9577 10.3328C9.02305 10.2944 9.08591 10.2522 9.14598 10.2065L6.46019 7.52073ZM5.25008 1.99996C5.25008 1.58575 5.58587 1.24996 6.00008 1.24996H10.0001C10.2508 1.24996 10.485 1.37529 10.6241 1.58393L11.7348 3.24996H14.0001C14.5526 3.24996 15.0825 3.46945 15.4732 3.86015C15.8639 4.25085 16.0834 4.78076 16.0834 5.33329V11.56C16.0834 11.9742 15.7476 12.31 15.3334 12.31C14.9192 12.31 14.5834 11.9742 14.5834 11.56V5.33329C14.5834 5.17858 14.522 5.03021 14.4126 4.92081C14.3032 4.81142 14.1548 4.74996 14.0001 4.74996H11.3334C11.0827 4.74996 10.8485 4.62463 10.7094 4.41598L9.59869 2.74996H6.00008C5.58587 2.74996 5.25008 2.41417 5.25008 1.99996Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12705"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconCameraOff, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4039:13059", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCameraOff size={size} /> });