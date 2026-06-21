export type { Client } from "./model/types";
export { fetchClientsByUser, createClient } from "./api/clientsApi";
export {
  ClientCard,
  ClientInfo,
  ClientDetail,
  ClientAvatar,
  ClientName,
  ClientService,
  StatusText,
  SmallText,
} from "./ui/ClientCard.styled";