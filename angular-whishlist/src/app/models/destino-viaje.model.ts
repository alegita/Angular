import { v4 as uuid } from 'uuid';
export class DestinoViaje {
    private selected: boolean;
    public servicios: string[];
    public votes = 0;
    id = uuid();
    
    constructor(public nombre: string, public imagenUrl: string) {
         this.servicios = ['pileta', 'desayuno'];
    }

    isSelected(): boolean {
        return this.selected;
    }
    setSelected(s: boolean) {
        this.selected = s;
    }
    voteUp(): any {
        this.votes++;
    }
    voteDown(): any {
        this.votes--;
    }
}