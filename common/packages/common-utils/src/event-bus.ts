import { Subject } from "rxjs";

export const eventBus = new Subject<{ type: string; payload?: any }>();
