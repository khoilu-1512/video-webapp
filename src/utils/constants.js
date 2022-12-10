import React from 'react';

import { BsCodeSlash, BsMusicNote, BsCameraVideo } from 'react-icons/bs';
import { IoIosFitness } from 'react-icons/io';
import { IoGameController } from 'react-icons/io5';

export const categories = [
  { name: 'Coding', icon: <BsCodeSlash /> },
  { name: 'Music', icon: <BsMusicNote /> },
  { name: 'Movie', icon: <BsCameraVideo /> },
  { name: 'Gaming', icon: <IoGameController /> },
  { name: 'Sport', icon: <IoIosFitness /> },
];

export const defaultThumbNail =
  'https://i.ytimg.com/vi_webp/3PHXvlpOkf4/maxresdefault.webp';
export const defaultChannelUrl = '/channel/UC8butISFwT-Wl7EV0hUK0BQ';
export const defaultChannelTitle = 'freeCodeCamp.org';
export const defaultVideoUrl = '/video/3PHXvlpOkf4';
export const defaultVideoTitle =
  'Build 15 JavaScript Projects - Vanilla JavaScript Course';
export const defaultProfilePicture =
  'http://dergipark.org.tr/assets/app/images/buddy_sample.png';
