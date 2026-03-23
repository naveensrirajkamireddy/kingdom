import { Env } from "pg-sdk-node";

// Test Credentials
export const clientId = "TEST-M23GOSZFCPQPR_25063";
export const clientSecret = "ZGE1YTcxZGMtOGU3OC00MzM5LTk3MjktMzE1NTYyNGNkZDA0";
export const clientVersion = 1; //insert your client version here
export const phonePeEnv = Env.SANDBOX; //change to Env.PRODUCTION when you go live

export enum SizesEnum {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
  XXXL = "XXXL",
  SIZE_20 = "20",
  SIZE_22 = "22",
  SIZE_24 = "24",
  SIZE_26 = "26",
  SIZE_28 = "28",
  SIZE_30 = "30",
  SIZE_32 = "32",
  SIZE_34 = "34",
  SIZE_36 = "36",
  SIZE_38 = "38",
  SIZE_40 = "40",
  SIZE_42 = "42",
}

export enum FashionColorEnum {
  BLACK = "Black",
  WHITE = "White",
  RED = "Red",
  MAROON = "Maroon",
  BURGUNDY = "Burgundy",
  PINK = "Pink",
  BLUSH = "Blush",
  FUCHSIA = "Fuchsia",
  PURPLE = "Purple",
  LAVENDER = "Lavender",
  VIOLET = "Violet",
  BLUE = "Blue",
  NAVY = "Navy",
  SKY_BLUE = "Sky Blue",
  TURQUOISE = "Turquoise",
  TEAL = "Teal",
  GREEN = "Green",
  OLIVE = "Olive",
  MINT = "Mint",
  LIME = "Lime",
  YELLOW = "Yellow",
  MUSTARD = "Mustard",
  ORANGE = "Orange",
  CORAL = "Coral",
  BEIGE = "Beige",
  CREAM = "Cream",
  IVORY = "Ivory",
  GREY = "Grey",
  CHARCOAL = "Charcoal",
  BROWN = "Brown",
  TAN = "Tan",
  CAMEL = "Camel",
  GOLD = "Gold",
  SILVER = "Silver",
  PEACH = "Peach",
  WINE = "Wine",
  COPPER = "Copper",
}
