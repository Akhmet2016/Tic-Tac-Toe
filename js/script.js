$(document).ready(function() {

	var mass = [], v = 0, mass_first = [0,0,0,0,0,0,0,0,0], mass_second = [0,0,0,0,0,0,0,0,0];

	$('.cell').on('click', function() {

		var cell_text = $(this).text();

		if (cell_text != '') {
			alert("Ааа нет, тут же занято");
		} else {

			if (mass.length == 0 || mass.length % 2 == 0) {
				$(this).text('x');

				var id_cell = $(this).attr('id');
				id_cell = parseInt(id_cell);

				mass.push(id_cell);
				
				

				for (var i = 0; i < 9; i++) {
	            	if(i + 1 == id_cell) {
	            		mass_first[i] = 2;
	            	}
            	}

				victory();

			} else {
				id_cell = $(this).attr('id');
				id_cell = parseInt(id_cell);

	            $(this).text('o');

	            mass.push(id_cell);
	            
	            
	            for (var i = 0; i < 9; i++) {
	            	if(i + 1 == id_cell) {
	            		mass_second[i] = 3;
	            	}
	            }

	            victory();

			}

			if (mass.length == 9 && victory() != 1) {
				noneVictory();
			}
		}

	});

	//Проверка попеды
	function victory() {

		//Для первого игрока
		//Проверка по горизонтали
		if (mass_first[0] == 2 && mass_first[1] == 2 && mass_first[2] == 2) {
			$('.victory').text('Первый игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('1');
		}
		if (mass_first[3] == 2 && mass_first[4] == 2 && mass_first[5] == 2) {
			$('.victory').text('Первый игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('1');
		}
		if (mass_first[6] == 2 && mass_first[7] == 2 && mass_first[8] == 2) {
			$('.victory').text('Первый игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('1');
		}
		//Проверка по вертикали
		if (mass_first[0] == 2 && mass_first[3] == 2 && mass_first[6] == 2) {
			$('.victory').text('Первый игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('1');
		}
		if (mass_first[1] == 2 && mass_first[4] == 2 && mass_first[7] == 2) {
			$('.victory').text('Первый игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('1');
		}
		if (mass_first[2] == 2 && mass_first[5] == 2 && mass_first[8] == 2) {
			$('.victory').text('Первый игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('1');
		}
		//Проверка диагоналей
		if (mass_first[0] == 2 && mass_first[4] == 2 && mass_first[8] == 2) {
			$('.victory').text('Первый игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('1');
		}
		if (mass_first[2] == 2 && mass_first[4] == 2 && mass_first[6] == 2) {
			$('.victory').text('Первый игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('1');
		}
		
		//Для второго игрока
		//Проверка по горизонтали
		if (mass_second[0] == 3 && mass_second[1] == 3 && mass_second[2] == 3) {
			$('.victory').text('Второй игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('2');
		}
		if (mass_second[3] == 3 && mass_second[4] == 3 && mass_second[5] == 3) {
			$('.victory').text('Второй игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('2');
		}
		if (mass_second[6] == 3 && mass_second[7] == 3 && mass_second[8] == 3) {
			$('.victory').text('Второй игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('2');
		}
		//Проверка по вертикали
		if (mass_second[0] == 3 && mass_second[3] == 3 && mass_second[6] == 3) {
			$('.victory').text('Второй игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('2');
		}
		if (mass_second[1] == 3 && mass_second[4] == 3 && mass_second[7] == 3) {
			$('.victory').text('Второй игрок лучше');
	 		$('.victory').css('display', 'block');
	 		victoryBegin('2');
		}
		if (mass_second[2] == 3 && mass_second[5] == 3 && mass_second[8] == 3) {
			$('.victory').text('Второй игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('2');
		}
		//Проверка диагоналей
		if (mass_second[0] == 3 && mass_second[4] == 3 && mass_second[8] == 3) {
			$('.victory').text('Второй игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('2');
		}
		if (mass_second[2] == 3 && mass_second[4] == 3 && mass_second[6] == 3) {
			$('.victory').text('Второй игрок лучше');
	 		$('.victory').css('display', 'block');
	 		v = 1;
	 		victoryBegin('2');
		}

		return v;

	}

	//Действия при победе
	function victoryBegin(user) {

		setTimeout(function() {

			$('.victory').css('display', 'none');
			$('.cell').text('');

			var round = $('.statistics span').text();
			round++;
			$('.statistics span').text(round);

			if (user == '2') {
				$('.secondGamer').text($('.secondGamer').text() * 1 + 1);
			} else {
				$('.firstGamer').text($('.firstGamer').text() * 1 + 1);
			}

			mass = [];
			v = 0;
			mass_first = [0,0,0,0,0,0,0,0,0];
			mass_second = [0,0,0,0,0,0,0,0,0];

		}, 2000);

	}

	//При ничьей
	function noneVictory() {

		setTimeout(function() {
			$('.victory').text('Увы, победителей нет');
			$('.victory').css('display', 'block');
		}, 500);

		setTimeout(function() {
			$('.victory').css('display', 'none');
			$('.cell').text('');

			$('.statistics span').text($('.statistics span').text() * 1 + 1);

			mass = [];
			mass_first = [0,0,0,0,0,0,0,0,0];
			mass_second = [0,0,0,0,0,0,0,0,0];

		}, 2000);

	}

})