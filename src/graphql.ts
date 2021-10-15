
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateEventInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    gifts?: Nullable<Nullable<CreateGiftInput>[]>;
}

export class UpdateEventInput {
    id: number;
    name?: Nullable<string>;
    description?: Nullable<string>;
    gifts?: Nullable<Nullable<UpdateGiftInput>[]>;
}

export class CreateGiftInput {
    name?: Nullable<string>;
    events?: Nullable<Nullable<CreateEventInput>[]>;
}

export class UpdateGiftInput {
    id: number;
    name?: Nullable<string>;
    events?: Nullable<Nullable<UpdateEventInput>[]>;
}

export class Event {
    id: string;
    name: string;
    description?: Nullable<string>;
    gifts?: Nullable<Nullable<Gift>[]>;
}

export abstract class IQuery {
    abstract events(): Nullable<Event>[] | Promise<Nullable<Event>[]>;

    abstract event(id: number): Nullable<Event> | Promise<Nullable<Event>>;

    abstract gifts(): Nullable<Gift>[] | Promise<Nullable<Gift>[]>;

    abstract gift(id: number): Nullable<Gift> | Promise<Nullable<Gift>>;
}

export abstract class IMutation {
    abstract createEvent(createEventInput: CreateEventInput): Event | Promise<Event>;

    abstract updateEvent(updateEventInput: UpdateEventInput): Event | Promise<Event>;

    abstract removeEvent(id: number): Nullable<string> | Promise<Nullable<string>>;

    abstract createGift(createGiftInput: CreateGiftInput): Gift | Promise<Gift>;

    abstract updateGift(updateGiftInput: UpdateGiftInput): Gift | Promise<Gift>;

    abstract removeGift(id: number): Nullable<string> | Promise<Nullable<string>>;
}

export class Gift {
    id: string;
    name: string;
    events?: Nullable<Nullable<Event>[]>;
}

type Nullable<T> = T | null;
