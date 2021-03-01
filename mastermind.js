const app=new Vue({
    el:'#myApp',
    data:{
        credentials:"Antonio Aranda",
        title:"MASTERMIND GAME",
        selectionable_colors:[
            {name:"red", css:"#FF0000"},
            {name:"white", css:"#FFFFFF"},
            {name:"purple", css:"#B163CC"},
            {name:"green", css:"#0FFD03"},
            {name:"dark-blue", css:"#0004A9"},
            {name:"black", css:"#000000"},
            {name:"orange", css:"#FF8700"},
            {name:"dark-green", css:"#006E36"},
            {name:"pink", css:"#FE00FF"},
            {name:"brown", css:"#6E3800"},
            {name:"light-blue", css:"#01F5FC"},
            {name:"yellow", css:"#FFF202"},
        ],
        color_selected:{name:"void", css:"#7F8C8D"},
        game_finished:true,
        order_to_show_1:"Select a color",
        order_to_show_main:"",
        game_message:"Welcome to Mastermind, please, click on START NEW GAME button",
        game_table:[
            {game:[{row:9, name:"void", css:"#7F8C8D"},
            {row:9, name:"void", css:"#7F8C8D"},
            {row:9,name:"void", css:"#7F8C8D"},
            {row:9,name:"void", css:"#7F8C8D"},],
            correction_table:[{row:9, name:"void", css:"#7F8C8D"},
            {row:9, name:"void", css:"#7F8C8D"},
            {row:9,name:"void", css:"#7F8C8D"},
            {row:9,name:"void", css:"#7F8C8D"},]
             },
             {game:[{row:8, name:"void", css:"#7F8C8D"},
             {row:8, name:"void", css:"#7F8C8D"},
             {row:8,name:"void", css:"#7F8C8D"},
             {row:8,name:"void", css:"#7F8C8D"},],
             correction_table:[{row:8, name:"void", css:"#7F8C8D"},
             {row:8, name:"void", css:"#7F8C8D"},
             {row:8,name:"void", css:"#7F8C8D"},
             {row:8,name:"void", css:"#7F8C8D"},]
             },
             {game:[{row:7, name:"void", css:"#7F8C8D"},
             {row:7, name:"void", css:"#7F8C8D"},
             {row:7,name:"void", css:"#7F8C8D"},
             {row:7,name:"void", css:"#7F8C8D"},],
             correction_table:[{row:7, name:"void", css:"#7F8C8D"},
             {row:7, name:"void", css:"#7F8C8D"},
             {row:7,name:"void", css:"#7F8C8D"},
             {row:7,name:"void", css:"#7F8C8D"},]
             },
             {game:[{row:6, name:"void", css:"#7F8C8D"},
             {row:6, name:"void", css:"#7F8C8D"},
             {row:6,name:"void", css:"#7F8C8D"},
             {row:6,name:"void", css:"#7F8C8D"},],
             correction_table:[{row:6, name:"void", css:"#7F8C8D"},
             {row:6, name:"void", css:"#7F8C8D"},
             {row:6,name:"void", css:"#7F8C8D"},
             {row:6,name:"void", css:"#7F8C8D"},]
             },
             {game:[{row:5, name:"void", css:"#7F8C8D"},
             {row:5, name:"void", css:"#7F8C8D"},
             {row:5,name:"void", css:"#7F8C8D"},
             {row:5,name:"void", css:"#7F8C8D"},],
             correction_table:[{row:5, name:"void", css:"#7F8C8D"},
             {row:5, name:"void", css:"#7F8C8D"},
             {row:5,name:"void", css:"#7F8C8D"},
             {row:5,name:"void", css:"#7F8C8D"},]
             },
             {game:[{row:4, name:"void", css:"#7F8C8D"},
             {row:4, name:"void", css:"#7F8C8D"},
             {row:4,name:"void", css:"#7F8C8D"},
             {row:4,name:"void", css:"#7F8C8D"},],
             correction_table:[{row:4, name:"void", css:"#7F8C8D"},
             {row:4, name:"void", css:"#7F8C8D"},
             {row:4,name:"void", css:"#7F8C8D"},
             {row:4,name:"void", css:"#7F8C8D"},]
             },
             {game:[{row:3, name:"void", css:"#7F8C8D"},
             {row:3, name:"void", css:"#7F8C8D"},
             {row:3,name:"void", css:"#7F8C8D"},
             {row:3,name:"void", css:"#7F8C8D"},],
             correction_table:[{row:3, name:"void", css:"#7F8C8D"},
             {row:3, name:"void", css:"#7F8C8D"},
             {row:3,name:"void", css:"#7F8C8D"},
             {row:3,name:"void", css:"#7F8C8D"},]
             },
             {game:[{row:2, name:"void", css:"#7F8C8D"},
             {row:2, name:"void", css:"#7F8C8D"},
             {row:2,name:"void", css:"#7F8C8D"},
             {row:2,name:"void", css:"#7F8C8D"},],
             correction_table:[{row:2, name:"void", css:"#7F8C8D"},
             {row:2, name:"void", css:"#7F8C8D"},
             {row:2,name:"void", css:"#7F8C8D"},
             {row:2,name:"void", css:"#7F8C8D"},]
             },
             {game:[{row:1, name:"void", css:"#7F8C8D"},
             {row:1, name:"void", css:"#7F8C8D"},
             {row:1,name:"void", css:"#7F8C8D"},
             {row:1,name:"void", css:"#7F8C8D"},],
             correction_table:[{row:1, name:"void", css:"#7F8C8D"},
             {row:1, name:"void", css:"#7F8C8D"},
             {row:1,name:"void", css:"#7F8C8D"},
             {row:1,name:"void", css:"#7F8C8D"},]
             },
             {game:[{row:0, name:"void", css:"#7F8C8D"},
             {row:0, name:"void", css:"#7F8C8D"},
             {row:0,name:"void", css:"#7F8C8D"},
             {row:0,name:"void", css:"#7F8C8D"},],
             correction_table:[{row:0, name:"void", css:"#7F8C8D"},
             {row:0, name:"void", css:"#7F8C8D"},
             {row:0,name:"void", css:"#7F8C8D"},
             {row:0,name:"void", css:"#7F8C8D"},]
             },
        ],
        hiddenCode:[
            {name:"void", css:"#7F8C8D"},
            {name:"void", css:"#7F8C8D"},
            {name:"void", css:"#7F8C8D"},
            {name:"void", css:"#7F8C8D"},
        ],
        codeToBreak:[
            {name:"void", css:"#7F8C8D"},
            {name:"void", css:"#7F8C8D"},
            {name:"void", css:"#7F8C8D"},
            {name:"void", css:"#7F8C8D"},
        ],
        allowable_row:0,
        victories:0,
        defeats:0,
        points:0,
    },
    methods:{
        colorSelected (color){
            if(this.game_finished==false){
                this.color_selected.name=color.name;
                this.color_selected.css=color.css;
                this.order_to_show_1="Select where is the color";
            }
        },
        startNewGame(){
            //reset the board
            this.game_finished=false;
            this.order_to_show_1="Select a color"
            this.allowable_row=0;
            for(var i=0; i<this.game_table.length; i++){
                for(var j=0; j<this.game_table[i].game.length; j++){
                    this.game_table[i].game[j].name="void";
                    this.game_table[i].game[j].css="#7F8C8D";
                }
            }
            for(var i=0; i<this.game_table.length; i++){
                for(var j=0; j<this.game_table[i].correction_table.length; j++){
                    this.game_table[i].correction_table[j].name="void";
                    this.game_table[i].correction_table[j].css="#7F8C8D";
                }
            }
            for(var i=0; i<this.hiddenCode.length; i++){
                this.hiddenCode[i].name="void";
                this.hiddenCode[i].css="#7F8C8D";
            }
            this.color_selected.name="void"; this.color_selected.css="#7F8C8D";
            //create a new randow code to break
            var randomnumbers=[];
            for(var i=0; i<this.codeToBreak.length;){
                var randomNumber = Math.round(Math.random()*11);
                var aux=false;
                for(var j=0; j<randomnumbers.length; j++){
                    if(randomnumbers[j]==randomNumber){
                        aux=true;
                    }
                }
                if(aux==false){
                    randomnumbers.push(randomNumber);
                    i++;
                }
            }
            for(var i=0; i<this.codeToBreak.length; i++){
                var rand=randomnumbers[i];
                this.codeToBreak[i].name=this.selectionable_colors[rand].name;
                this.codeToBreak[i].css=this.selectionable_colors[rand].css;
            }
            this.game_message="OK, now select colors and fill the corresponding row, when you're ready, click on CHECK"
        },
        elementClicked(element){
            if(this.game_finished==false){
                if(element.row==this.allowable_row){
                    element.name=this.color_selected.name;
                    element.css=this.color_selected.css;
                }
            }
        },
        check_row(){
            if(this.game_finished==false){
                var mypos=0;
                var aux=false;
                for(var i=0; i<this.game_table.length; i++){
                    for(var j=0; j<this.game_table[i].game.length; j++){
                        if(this.game_table[i].game[j].row==this.allowable_row){
                            mypos=i;
                            break;
                        }
                    }
                }
                for(var i=0; i<this.game_table[mypos].game.length; i++){
                   if(this.game_table[mypos].game[i].name=="void"){
                       aux=true;
                       break;
                   } 
                }
                if(aux==false){
                    this.allowable_row++;
                    //check the row
                    var nExact=0;
                    var n=0;
                    //check equals
                    for(var pass=0; pass<2; pass++){
                        for(var i=0; i<this.codeToBreak.length; i++){
                            for(var j=0; j<this.game_table[mypos].game.length; j++){
                                if(this.codeToBreak[i].name==this.game_table[mypos].game[j].name){
                                   if(j==i){
                                       if(pass==0){
                                           this.game_table[mypos].correction_table[n].name="black";
                                           this.game_table[mypos].correction_table[n].css="#000000";
                                           nExact++; 
                                           n++;
                                       }
                                   }
                                   else{
                                       if(pass>0){
                                           this.game_table[mypos].correction_table[n].name="white";
                                           this.game_table[mypos].correction_table[n].css="#FFFFFF";
                                           n++;
                                       }
                                   }
                                }
                           }
                       }
                    }
                    //count the number of successes and display a message
                    var n_white=0;
                    var n_black=0;
                    for(var i=0; i<this.game_table[mypos].correction_table.length; i++){
                        if(this.game_table[mypos].correction_table[i].name=="white"){
                            n_white++;
                        }
                        if(this.game_table[mypos].correction_table[i].name=="black"){
                            n_black++;
                        }
                    }
                    var mystr="You hit ";
                    if(n_black>0){
                        mystr+=n_black.toString(); 
                        if(n_black==1){mystr+=" exact position ";}
                        else{mystr+=" exact positions ";}
                    };
                    if(n_black>0 && n_white>0){mystr+="and "};
                    if(n_white>0){
                        mystr+=n_white.toString();
                        if(n_white==1){mystr+=" color";}
                        else{mystr+=" colors";}
                    };
                    if(n_black==0 && n_white==0){mystr="You didn't get anything right"}
                    this.game_message=mystr;


                    if(nExact==this.codeToBreak.length){
                        this.game_message="Congratulations, you won.\nClick on START NEW GAME for another game"
                        this.game_finished=true;
                        this.victories++;
                        this.points+=this.game_table.length-this.allowable_row+1;
                        //show hidden code
                        for(var i=0; i<this.hiddenCode.length; i++){
                            this.hiddenCode[i].name=this.codeToBreak[i].name;
                            this.hiddenCode[i].css=this.codeToBreak[i].css;
                        }
                    }
                    else{
                        if(this.allowable_row>=this.game_table.length){
                            this.defeats++;
                            this.game_message="I'm sorry, but you lose";
                            this.game_finished=true;
                            //show hidden code
                            for(var i=0; i<this.hiddenCode.length; i++){
                                this.hiddenCode[i].name=this.codeToBreak[i].name;
                                this.hiddenCode[i].css=this.codeToBreak[i].css;
                            }
                        }
                    }
                }
                else{
                    this.game_message="You have to fill the entire row before check"
                }
                
            }
        }
    }
})