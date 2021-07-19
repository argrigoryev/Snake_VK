export default class Canvas {

    constructor( container ) {

        this.element = document.createElement( "canvas" );
        this.context = this.element.getContext( "2d" );

        this.element.width = 320;
        this.element.height = 400;

        while (container.firstChild) {
            container.firstChild.remove();
        }

        container.appendChild( this.element );

    }

}