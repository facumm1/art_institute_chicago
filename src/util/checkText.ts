export const checkText = (text: string, to: number) => {
  if (!text || text.length <= 0) {
    return 'Not available';
  }

  if (text.length < to) {
    return text;
  }

  return text.slice(0, to).trim() + '...';
};
