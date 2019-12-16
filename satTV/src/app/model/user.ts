import { Package, Service, Channel } from './subscription';

export class User {
    id: string;
    name: string;
    email: string;
    phone: number;
    balance: number;
    cr_pack: Package;
    cr_service: Service;
    cr_channel: Channel;
    token: string;
    isActive: number;
}