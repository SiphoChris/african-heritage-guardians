export const getBadgeColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "gold":
      return "yellow";
    case "silver":
      return "gray";
    case "bronze":
      return "orange";
    case "platinum":
      return "gray";
    default:
      return "orange";
  }
};