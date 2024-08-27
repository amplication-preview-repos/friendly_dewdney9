import { Follow as TFollow } from "../api/follow/Follow";

export const FOLLOW_TITLE_FIELD = "followeeId";

export const FollowTitle = (record: TFollow): string => {
  return record.followeeId?.toString() || String(record.id);
};
