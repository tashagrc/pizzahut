$.getJSON('./data/pizza.json', function (data) {
    // console.log(data);
    // masuk ke menu
    let menu = data.menu;
    $.each(menu, function(i, data) {
        $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/pizza/' + data.gambar + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
    });
});

$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    // ganti judul
    $('h1').html(kategori);

    $.getJSON('data/pizza.json', function(data) {
        let menu = data.menu;
        let content = '';
        // tampilin berdasarkan kategori
        $.each(menu, function(i, data) {
            // kalo data kategori sama dgn kategori yg diklik
            if( data.kategori == kategori.toLowerCase() || kategori == "All Menu") {
                content += '<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/pizza/' + data.gambar + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });
        // hanya tampilkan sesuai kategori
        $('#daftar-menu').html(content);
    });

    
});