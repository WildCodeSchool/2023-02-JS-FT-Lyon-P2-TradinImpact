import PropTypes from "prop-types";
import { createContext, useState, useMemo, useContext } from "react";

const AvatarContext = createContext();

export default AvatarContext;

export function AvatarContextProvider({ children }) {
  const [avatar, setAvatar] = useState(null);
  const avatars = ["gorou", "fischl", "eula", "chongyun", "ayato", "aloy"];

  const value = useMemo(
    () => ({
      avatar,
      setAvatar,
      avatars,
    }),
    [avatar]
  );
  return (
    <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>
  );
}

export const useAvatarContext = () => useContext(AvatarContext);

AvatarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
