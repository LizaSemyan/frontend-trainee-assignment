import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, CardMedia, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

interface AdGalleryProps {
  images: string[];
}

export const AdGallery = ({ images }: AdGalleryProps) => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  if (!images.length) {
    return <Typography variant="h6">Нет изображений</Typography>;
  }

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Галерея ({images.length})
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        <CardMedia
          component="img"
          image={images[index]}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: 2,
          }}
        />

        <IconButton onClick={prev} sx={{ left: 10 }}>
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton onClick={next} sx={{ right: 10 }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
