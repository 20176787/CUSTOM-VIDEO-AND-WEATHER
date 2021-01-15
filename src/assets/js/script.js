//menyiapkan jquery setelah document sudah siap
$(document).ready(function(){
    // event ketika tombol diklik
    $('.page-scroll').on('click', function(e){
        // mengambil nilai dari href
        let tujuan = $(this).attr('href');
        
        let elementujuan = $(tujuan);
        // menganimasikan smooth scrolling
        $('html,body').animate({
            scrollTop: elementujuan.offset().top -100
        },950);
        //scrollTop agar halaman dapat discroll ke elemen tujuan
        // offset agar mendapatkan nilai elementujuan shg scrollTop dapat memindahkan ke elementujuan dg pas
        // 800 dapat diisi dg angka lain, indikator dari waktu scrolling (satuan ms)
        e.preventDefault();
    });
})
