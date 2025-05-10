// membuat title slug sebagai nama path

const title = document.title;
const slug = title.toLowerCase()
  .replace(/[^\w\s]/g, '')  // hapus tanda baca
  .trim()
  .replace(/\s+/g, '-'); // ganti spasi dengan (-)

const baseURL= `https://jackoluciano.github.io/PersonalLibrary/${slug}`; // url untuk dibagikan

// fungsi ketika menekan tombol "Bagikan Tulisan Ini"

function openPopup() {
  const popupHTML = `
    <div class="overlay" id="overlay" onclick="closePopup()"></div>
    <div class="popup" id="popup">
      <button onclick="closePopup()"><i class="fa-solid fa-xmark"></i></button>
      <p>Bagikan ke</p>

      <button onclick="copyLink()" class="copylink"><i class="fa-solid fa-link"></i></button>

      <a href="https://www.instagram.com/share/story?url=${baseURL}" target="_blank"><i class="fa-brands fa-instagram"></i>
      </a>

      <a href="https://www.facebook.com/sharer/sharer.php?u=${baseURL}" target="_blank"><i class="fa-brands fa-facebook"></i>
      </a>

      <a href="https://www.linkedin.com/shareArticle?mini=true&url=${baseURL}" target="_blank"><i class="fa-brands fa-linkedin"></i>
      </a>

      <a href="https://twitter.com/intent/tweet?url=${baseURL}" target="_blank"><i class="fa-brands fa-x-twitter"></i>
      </a>

      <a href="https://wa.me/?text=${encodeURIComponent(baseURL)}" target="_blank"><i class="fa-brands fa-whatsapp"></i>
      </a>

      <a href="https://t.me/share/url?url=${baseURL}" target="_blank"><i class="fa-brands fa-telegram"></i>
      </a>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', popupHTML); // meletakkan kode pada html
}

// fungsi menutup pop up (menekan tombol x)

function closePopup() {
  document.getElementById("overlay")?.remove();
  document.getElementById("popup")?.remove();
}

// fungsi copy link

function copyLink() {
    navigator.clipboard.writeText(baseURL)
        .then(() => {
            alert("Link berhasil disalin ke clipboard!");
        })
        .catch(err => {
            console.error("Gagal menyalin: ", err);
        });
}