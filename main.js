document.onkeydown=function(e)
{
    switch(e.keycode)
    {
        case 32:

        //画面サイズ
        const SCREEN_W=180;
        const SCREEN_H=320;

        //キャンバスサイズ
        const CANVAS_W=SCREEN_W*2;
        const CANVAS_H=SCREEN_H*2;

        //スクリーンサイズ
        const FIELD_W=SCREEN_W*2;
        const FIELD_H=SCREEN_H*2;

        //キャンバス
        let can=document.getElementById("can");
        let con=can.getContext("2d");

        can.width=CANVAS_W;
        can.height=CANVAS_H;

        //
        function rand(min,max)
        {
            return Math.floor(Math.random()*(max-min+1))+min;
        }

        //星クラス
        class Ster
        {
            constructor()
            {
                this.x=rand(0,FIELD_W)<<8;
                this.y=rand(0,FIELD_H)<<8;
                this.vx=0;
                this.vy=rand(30,500);
                this.sz=rand(1,2);
            }

            draw()
            {
                let x=this.x>>8;
                let y=this.y>>8;

                vcon.fillStyle=(rand(0,2)!=0)?"#66f":"#8af";
                vcon.fillRect(x,y,this.sz,this.sz);
            }

            update()
            {
                this.x+=this.vx;
                this.x+=this.vy;
                if(this.y>FIELD_H<<8)
                {
                    this.y=0;
                    this.x=rand(0,FIELD_W)<<8;
                }
            }
        }

        //
        const STAR_MAX=300;

        //
        let star=[];
        for(let i=0;i<STAR_MAX;i++)star[i]=new Star();

        vcon.fillStyle="black";
        vcon.fillRect(0,0,SCREEN_W,SCREEN_H);

        for(let i=0;i<STAR_MAX;i++)star[i].draw();
    }
}