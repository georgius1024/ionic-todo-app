/**
 * Created by georgius on 10.07.2018.
 */

export class TodoItem {
    createdAt: any;
    completedAt: any;
    archivedAt: any;
    constructor(public id: number, public title: string) {
        this.createdAt = new Date();
    }
    complete (): void {
        this.completedAt = new Date();
    }
    archive (): void {
        this.archivedAt = new Date();
    }
}