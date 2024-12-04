const openInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow !== null) newWindow.opener = null;
};

export const onClickUrl = (url: string) => {
  return () => { openInNewTab(url); };
};
