import redis from "../db/redis.config.js";

export const storeRefreshToken = async (userId, refreshToken) => {
  await redis.set(
    `refresh_token:${userId}`,
    refreshToken,
    "EX",
    7 * 26 * 60 * 60
  );
};
