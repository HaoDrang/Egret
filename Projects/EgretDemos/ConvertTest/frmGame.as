package 
{
	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	import flash.events.KeyboardEvent;
	import flash.events.Event;
	
	/**
	 * BIRD GAME
	 * @author mclelun
	 */
	public class frmGame extends MovieClip 
	{
		protected const vMapW:int = 700;
		protected const vMapH:int = 400;
		
		private var _P:clsBird;
		private var _PIPE:clsPipe;
		
		private var vIsPause:Boolean = false;
		private var vIsFlap:Boolean = false;
		private var vPipeMax:int = 3;
		private var vYSpeed:Number = 0;
		private var vYSpeedMax:Number = 1;
		private var vXSpeed:int = 10;
		private var vScores:int = 0;
		private var vScoresBest:int = 0;
		
		public function frmGame()
		{
			fnGameStart();	
		}
		
		//EVENT: ENTERFRAME
		private function o_enterFrame(e:Event):void
		{
			if (!vIsPause)
			{
				fnMovePlayer();
				fnMoveMap();
			}
		}
				
		//EVENT: MOUSE UP
		private function o_mUp(e:MouseEvent):void
		{
			if (e.target.name == "btnReplay")
			{
				fnGameRestart();
			}
			else
			{
				vIsFlap = true;
			}
		}
		
		//EVENT: Keyboard
		private function o_keyDown(e:KeyboardEvent):void
		{
			switch (e.keyCode) 
			{
				default:
					vIsFlap = true;
			}

		}
		
		//FUNC: Move Player/BIRD
		private function fnMovePlayer():void
		{
			if (_P.y < vMapH +_P.height && _P.y > 0 -_P.height ) // Didnt drop out of screen
			{
				if (!vIsFlap)
				{
					vYSpeed+=1.3;
				}
				else
				{
					vYSpeed = -13;
					vIsFlap = false;
				}
				_P.y += vYSpeed;
				_P.rotation = _P.y /2;
			}
			else
			{
				fnGameOver();
			}
		}
		
		//FUNC: Move Map/PIPES
		private function fnMoveMap():void
		{
			for (var i:int = 0; i < vPipeMax; i++)
			{
				var tmpPipe = _conMap.getChildAt(i);
				
				//if (tmpPipe.hitTestObject(_P))
				if (tmpPipe._HIT.hitTestPoint(_P.x, _P.y, true))
				{
					fnGameOver();
				}
				else
				{
					if (tmpPipe.x < 0)
					{
						tmpPipe.x = 1050 - vXSpeed;
						tmpPipe.y = Math.random() * 250;
						vScores++;
						txtScores.text = vScores.toString();
					}
					else
					{
						tmpPipe.x -= vXSpeed;
					}
				}
			}
		}
		
		//FUNC: Game Start
		private function fnGameStart():void
		{
			//ADD BIRD
			_P = new clsBird();
			_P.x = vMapW / 4;
			_P.y = vMapH / 3;
			_conP.addChild(_P);
			
			//ADD PIPE
			for (var i:int = 0; i < vPipeMax; i++)
			{
				var tmpPipe:clsPipe = new clsPipe();
				tmpPipe.x = (i * 350) + 1050;
				tmpPipe.y = Math.random() * 250;
				_conMap.addChild(tmpPipe);
			}
			
			btnReplay.visible = false;
			
			//EVENTLISTENER
			addEventListener(Event.ENTER_FRAME, o_enterFrame, false, 0, true);
			this.stage.addEventListener(MouseEvent.MOUSE_UP, o_mUp, false, 0, true);
			this.stage.addEventListener(KeyboardEvent.KEY_DOWN, o_keyDown, false, 0, true);
		}
		
		//FUNC: Game Over
		private function fnGameOver():void
		{
			vIsPause = true;
			btnReplay.visible = true;
		}
		
		//FUNC: Game Restart
		private function fnGameRestart():void
		{
			vIsPause = false;
			vYSpeed = 0;
			btnReplay.visible = false;
			
			if (vScores > vScoresBest)
			{
				vScoresBest = vScores;
			}
			txtScoresBest.text = vScoresBest.toString();
			vScores = 0;
			txtScores.text = vScores.toString();
		
			_P.x = vMapW / 4;
			_P.y = vMapH / 3;
			
			for (var i:int = 0; i < vPipeMax; i++)
			{
				var tmpPipe = _conMap.getChildAt(i);
				tmpPipe.x = (i * 350) + 1050;
				tmpPipe.y = Math.random() * 250;
			}
		}
		
		//FUNC: KILL ALL :D
		private function fnKill():void
		{
			removeEventListener(Event.ENTER_FRAME, o_enterFrame);
			this.removeEventListener(MouseEvent.MOUSE_UP, o_mUp);
			this.stage.removeEventListener(KeyboardEvent.KEY_DOWN, o_keyDown);
		}
		
	}
	
}