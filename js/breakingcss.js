var elements = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt'];


function init() {

	// create 4 randowm paragraphs

	var container = document.getElementById('breakingcss');

	var newContainerContent = '';

	for (var i = 0; i < 4; i++) {

		newContainerContent += '<p class="lead">' + chance.paragraph() + '</p>';
	};

	container.innerHTML = newContainerContent;

	// break them!

	makeBad();
}

function makeBad() {

	var paras = document.getElementsByTagName("p");

	for (var i = 0; i < paras.length; i++) {

		var paraContent = paras[i].innerText;

		for (var element in elements) {
			paraContent = paraContent.replace(elements[element], '<span class="bad">' + elements[element] + '</span>');
		}

		paras[i].innerHTML = paraContent;
	};
}
