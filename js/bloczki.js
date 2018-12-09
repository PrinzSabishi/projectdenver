const graBloczki = {
				//Podstawowe zmienne
				bloczkiLiczba : 20,
				bloczkiNaRzad : 5,
				divTablica : null,
				divWynik : null,
				bloczki : [],
				bloczkiAkt : [],
				liczbaRuch : 0,
				canGet : true,
				bloczkiPary: 0,
				bloczkiImg : [
					'bloczki/bloczek_1.jpg',
					'bloczki/bloczek_2.jpg',
					'bloczki/bloczek_3.jpg',
					'bloczki/bloczek_4.jpg',
					'bloczki/bloczek_5.jpg',
					'bloczki/bloczek_6.jpg',
					'bloczki/bloczek_7.jpg',
					'bloczki/bloczek_8.jpg',
					'bloczki/bloczek_9.jpg',
					'bloczki/bloczek_10.jpg'
				],
				
				//Metoda usuwania bloczków
				usunBloczki : function() {
					this.bloczkiAkt[0].remove();
					this.bloczkiAkt[1].remove();
					this.canGet = true;
					this.bloczkiAkt = [];
					this.bloczkiPary++;
					if(this.bloczkiPary >= this.bloczkiLiczba/2) {
						alert("Koniec gry! Gratuluję!");
					}
				},
				
				//Metoda resetowania bloczków
				resetujBloczki : function() {
					this.bloczkiAkt[0].style.backgroundImage = "url(bloczki/title.jpg)";
					this.bloczkiAkt[1].style.backgroundImage = "url(bloczki/title.jpg)";
					this.bloczkiAkt = [];
					this.canGet = true;
				},
				
				//Metoda klikania bloczków
				bloczekKlik : function(e) {
					if(this.canGet) {
						if(!this.bloczkiAkt[0] || (this.bloczkiAkt[0].dataset.index !== e.target.dataset.index)) {
							this.bloczkiAkt.push(e.target);
							e.target.style.backgroundImage = "url("+this.bloczkiImg[e.target.dataset.kartaRodzaj]+")";
						}
						if(this.bloczkiAkt.length === 2) {
							this.canGet = false;
							if(this.bloczkiAkt[0].dataset.kartaRodzaj === this.bloczkiAkt[1].dataset.kartaRodzaj) {
								setTimeout(this.usunBloczki.bind(this), 500);
							}
							else {
								setTimeout(this.resetujBloczki.bind(this), 500);
							}
							
							this.liczbaRuch++;
							this.divWynik.innerHTML = this.liczbaRuch;
						}
					}
				},
				
				
				//Funkcja startu gry
				startGra : function() {
				
					this.divTablica = document.querySelector(".gra-tablica");
					this.divTablica.innerHTML = "";
					
					this.divWynik = document.querySelector(".wynik").innerHTML;
					this.divWynik.innerHTML = '';
					
					this.bloczki = [];
					this.bloczkiAkt = [];
					this.canGet = true;
					this.liczbaRuch = 0;
					this.bloczkiPary = 0;
					
					for(let i=0; i<this.bloczkiLiczba; i++) {
						this.bloczki.push(Math.floor(i/2));
					}
					
					for(let i=this.bloczkiLiczba-1; i>0; i--) {
						const zamien = Math.floor(Math.random()*i);
						const tmp = this.bloczki[i];
						this.bloczki[i] = this.bloczki[zamien];
						this.bloczki[zamien] = tmp;
					}
					
					for(let i=0; i<this.bloczkiLiczba; i++) {
						const bloczek = document.createElement("div");
						bloczek.classList.add("gra-blok");
						this.divTablica.appendChild(bloczek);
						bloczek.dataset.kartaRodzaj = this.bloczki[i];
						bloczek.dataset.index = i;
						console.log(5+(bloczek.offsetWidth+5)*(i%this.bloczkiNaRzad))
						console.log(5+(bloczek.offsetHeight+5)*(Math.floor(i/this.bloczkiNaRzad))+" wysokosc")
						
						bloczek.style.left = 5+(bloczek.offsetWidth+10)*(i%this.bloczkiNaRzad) + "px";
						bloczek.style.top = 5+(bloczek.offsetHeight+10)*(Math.floor(i/this.bloczkiNaRzad)) + "px";
						bloczek.addEventListener('click', this.bloczekKlik.bind(this));
					}
				}
			}