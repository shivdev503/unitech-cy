'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({ src, alt, className, ...rest }: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (!didError) {
      setDidError(true);
      setImgSrc(ERROR_IMG_SRC);
    }
  };

  // For external images, use regular img tag
  if (src?.startsWith('http')) {
    return (
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        onError={handleError}
        {...rest}
      />
    );
  }

  // For local images, use Next.js Image component
  const width = typeof rest.width === 'number' ? rest.width : typeof rest.width === 'string' ? parseInt(rest.width, 10) || 800 : 800;
  const height = typeof rest.height === 'number' ? rest.height : typeof rest.height === 'string' ? parseInt(rest.height, 10) || 600 : 600;
  
  // Remove width and height from rest to avoid conflicts
  const { width: _, height: __, ...imageProps } = rest;
  
  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      width={width}
      height={height}
      {...imageProps}
    />
  );
}


