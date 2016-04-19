function renderDigit(x, y, num, ctx ){
	ctx.fillStyle() = 'rgb(0,103,153)';
	for(i = 0; i < digit[num].length; i++)
	{
		for(j = 0; j < dight[num][i].length; j++ )
		{
			if(digit[num][i][j])
			{
				ctx.beginPath();
				ctx.arc(x + i * 2 * (radius + 1) + (radius +１), y + j * 2 * (radius + 1) + (radius +　１), num, ctx);
				ctx.closePath();

				ctx.fill();
			}
		}
	}
}