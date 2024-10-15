export interface AuthenticationResponse {
  accessToken: string;  // The access token returned by the API
  message: string;      // A message indicating the result of the operation
  characterId?: number; // The character ID, optional if not always provided
}
