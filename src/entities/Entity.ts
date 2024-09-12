abstract class Entity {
    public getKeys(): Array<keyof this> {
        return Object.keys(this) as Array<keyof this>;
    }

    public toArray(): any[] {
        return [];
    }
}