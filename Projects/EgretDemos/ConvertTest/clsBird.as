package 
{
	import flash.display.MovieClip;
	
	/**
	 * ...
	 * @author mclelun
	 */
	public class clsBird extends MovieClip 
	{
		public function clsBird()
		{
		}
		
		/*
		private var vIsFlap:Boolean = false;
		private var vYSpeed:Number = 0;
		private var vYSpeedMax:Number = 1;
		private var vMapW:int;
		private var vMapH:int;

		public function clsBird(p_mapW:int, p_mapH:int)
		{
			vMapW = p_mapW;
			vMapH = p_mapH;

			this.x = vMapW / 4;
			this.y = vMapH / 3;
		}
		public function fnMove():void
		{
			if (this.y < vMapH +this.height ) // Didnt drop out of screen
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
				this.y += vYSpeed;
				this.rotation = this.y /2;
			}
			else
			{
				this.x = vMapW / 4;
				this.y = vMapH / 3;
				vYSpeed = 0;
			}
		}
		//GETSET FLAP
		public function get _isFlap():Boolean
		{
			return vIsFlap;
		}
		public function set _isFlap(p:Boolean):void
		{
			vIsFlap = p;
		}
		*/
		
	}
	
}