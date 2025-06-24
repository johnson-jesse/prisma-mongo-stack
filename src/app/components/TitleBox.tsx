import { Box, BoxProps } from '@mui/material';

export default function TitleBox({ sx, ...others }: BoxProps) {
  const x = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    ...sx,
  };
  return <Box sx={x} {...others} />;
}
