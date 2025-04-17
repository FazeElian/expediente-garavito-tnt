import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';

dayjs.extend(relativeTime);
dayjs.locale('es');

export const timeAgo = (isoDate: string): string => {
    return dayjs(isoDate).fromNow();
};