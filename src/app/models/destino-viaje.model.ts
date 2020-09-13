export class DestinoViaje {
    public selected: boolean;
    public servicios: string[];
    public votes = 0;
    
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