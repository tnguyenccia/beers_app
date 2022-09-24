import app from '@src/api/app';

const PORT: number = 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));