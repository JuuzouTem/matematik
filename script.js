document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('questions-container');

    const questionsData = [
        {
            id: "q4_p1", // Corresponds to PDF Soru 4, Sayfa 1
            title: "Soru 1 (Dönen Üçgenin Hacmi)",
            imageSrc: "images/soru_1.png", // Updated to match video/explorer
            topics: "Katı Cisimler (Koni Hacmi), Pisagor Teoremi.",
            whyChallenging: "Bir üçgenin bir doğru etrafında döndürülmesiyle oluşan cismin hacmini bulmak, doğru dik üçgenleri ve dönme yarıçaplarını/yüksekliklerini belirlemeyi ve koni hacim formülünü (iki koninin hacim farkı) uygulamayı gerektirir.",
            attentionPoints: "Dönme eksenini doğru anlamak. Oluşan büyük ve küçük konilerin yarıçap ve yüksekliklerini doğru hesaplamak. Hacimlerin farkının alınacağını görmek.",
            toc: "6.1.1",
            solutionSteps: `
                <p>Verilenler: ABC üçgeni, d doğrusu (AD) etrafında 360° döndürülüyor. |AB|=17 cm, |AC|=9 cm, |BD|=8 cm (BD ⊥ AD). (Soruda AC=9 olarak verilmiş ancak çözümde AD=AC+CD=15, CD=6, AC=9 olacak şekilde ilerlenmiş. Koni oluşumu ABD ve ACD üçgenlerinin AD ekseni etrafında dönmesiyle oluyor.)</p>
                <ol>
                    <li><strong>8-15-17 Özel Üçgeni:</strong>
                        <ul>
                            <li>ABD dik üçgeninde |BD|=8 cm, |AB|=17 cm ise Pisagor teoreminden veya özel üçgenden |AD|=15 cm bulunur.</li>
                            <li>ACD dik üçgeninde |AC| (yanal ayrıt) değil, AC AD üzerinde bir parça. Sorudaki AC=9 cm, AD üzerindeki bir uzunluktur.</li>
                            <li>Video çözümünde; oluşan cisim, yarıçapı BD=8 cm, yüksekliği AD=15 cm olan büyük bir koniden (ABD'nin dönmesi), yarıçapı yine BD=8 cm, yüksekliği CD olan küçük bir koninin (CBD'nin dönmesi değil, ABC üçgeninin dönmesi için ACD üçgeni ile oluşan boşluğun çıkarılması) çıkarılmasıyla bulunur.</li>
                            <li>AD = 15 cm. AC = 9 cm ise CD = AD - AC = 15 - 9 = 6 cm.</li>
                        </ul>
                    </li>
                    <li><strong>Büyük Koninin Hacmi (V<sub>büyük</sub> - ABD üçgeninin dönmesiyle):</strong>
                        <ul>
                            <li>Yarıçap (R) = BD = 8 cm.</li>
                            <li>Yükseklik (H<sub>büyük</sub>) = AD = 15 cm.</li>
                            <li>V<sub>büyük</sub> = (1/3) * π * R² * H<sub>büyük</sub> = (1/3) * π * (8)² * 15 = (1/3) * π * 64 * 15 = π * 64 * 5 = 320π cm³.</li>
                        </ul>
                    </li>
                     <li><strong>Küçük Koninin Hacmi (V<sub>küçük</sub> - ACD üçgeninin dönmesiyle oluşan ve çıkarılacak olan):</strong>
                        <ul>
                            <li>Yarıçap (R) = BD = 8 cm (ABC üçgeninin dönmesiyle oluşan kesik koni gibi düşünülebilir veya büyük koniden içteki boş koni çıkarılır).</li>
                            <li>Yükseklik (H<sub>küçük</sub>) = CD = 6 cm.</li>
                            <li>V<sub>küçük</sub> = (1/3) * π * R² * H<sub>küçük</sub> = (1/3) * π * (8)² * 6 = (1/3) * π * 64 * 6 = π * 64 * 2 = 128π cm³.</li>
                        </ul>
                    </li>
                    <li><strong>Oluşan Cismin Hacmi (V):</strong>
                        V = V<sub>büyük</sub> - V<sub>küçük</sub> = 320π - 128π = 192π cm³.
                    </li>
                </ol>
                <p>Sonuç olarak, oluşan cismin hacmi 192π cm³'tür. Soruda "kaç π santimetreküptür" dendiği için cevap 192'dir.</p>
                <p><strong>Doğru Cevap: A) 192</strong></p>
            `
        },
        {
            id: "q31_p7", // Corresponds to PDF Soru 31, Sayfa 7
            title: "Soru 2 (Teğet Çemberler ve İp Uzunluğu)",
            imageSrc: "images/soru_4.png", // Updated to match video/explorer
            topics: "Çemberde Teğet, Dairenin Çevresi (Yay Uzunluğu), Eşkenar Üçgen.",
            whyChallenging: "Birbirine teğet eş çemberlerin etrafına sarılan gergin ipin uzunluğu soruluyor. Çözüm, teğet parçalarının (doğrusal) uzunlukları ile çemberler üzerindeki yay parçalarının uzunluklarının toplamını bulmayı gerektirir. Merkezleri birleştirerek oluşan geometrik şekli (eşkenar üçgen) ve yayların gördüğü merkez açıları doğru tespit etmek önemlidir.",
            attentionPoints: "İpin doğrusal kısımlarının uzunluklarının çemberlerin yarıçaplarıyla ilişkisi. İpin çemberlere sardığı yayların merkez açılarını doğru bulmak. Tüm yay parçalarının toplamda bir tam çember oluşturduğunu görmek.",
            toc: "5.3.1, 5.4.1",
            solutionSteps: `
                <p>Verilenler: Birbirine teğet olan 3 eş çember. Yarıçapları r = 3 cm.</p>
                <ol>
                    <li><strong>Doğrusal Kısımların Uzunluğu:</strong>
                        <ul>
                            <li>Çemberlerin merkezlerini birleştirdiğimizde, kenar uzunluğu 2r = 2 * 3 = 6 cm olan bir eşkenar üçgen oluşur.</li>
                            <li>İpin doğrusal kısımları, bu eşkenar üçgenin kenarlarına paralel ve eşittir. Her bir doğrusal parçanın uzunluğu 2r = 6 cm'dir.</li>
                            <li>Toplamda 3 adet doğrusal parça vardır. Toplam doğrusal uzunluk = 3 * 6 = 18 cm.</li>
                        </ul>
                    </li>
                    <li><strong>Yay Kısımlarının Uzunluğu:</strong>
                        <ul>
                            <li>Her bir çember üzerinde ipin temas ettiği bir yay parçası vardır.</li>
                            <li>Eşkenar üçgenin her bir iç açısı 60°'dir.</li>
                            <li>Merkezden teğet değme noktalarına çizilen yarıçaplar doğrusal ip parçalarına diktir. Bu nedenle her bir çemberde, ipin sardığı yayın merkez açısı 360° - (90° + 90° + 60°) = 360° - 240° = 120°'dir.</li>
                            <li>Bir çember üzerindeki yay uzunluğu = (Merkez Açı / 360°) * 2πr = (120° / 360°) * 2π(3) = (1/3) * 6π = 2π cm.</li>
                            <li>3 adet eş çember olduğu için toplam yay uzunluğu = 3 * 2π = 6π cm.</li>
                        </ul>
                    </li>
                    <li><strong>Toplam İp Uzunluğu:</strong>
                        Toplam İp Uzunluğu = Doğrusal Kısımların Toplamı + Yay Kısımlarının Toplamı
                        Toplam İp Uzunluğu = 18 cm + 6π cm.
                    </li>
                </ol>
                <p><strong>Doğru Cevap: C) 6π + 18</strong></p>
            `
        },
        {
            id: "q12_p3", // Corresponds to PDF Soru 12, Sayfa 3
            title: "Soru 3 (Kırılan Direk ve Küre)",
            imageSrc: "images/soru_2.png", // Updated to match video/explorer
            topics: "Katı Cisimler (Küre), Uzay Geometri, Pisagor Teoremi.",
            whyChallenging: "Kırılan bir direğin küre şeklindeki taşa değmesi durumunda, en yakın ve en uzak mesafe bilgileriyle kürenin yarıçapı ve direğin kırılma noktasının küre merkezine uzaklığı bulunur. Sonrasında kırılan parçanın uç noktasının taşın merkezine uzaklığı için 3D düşünme veya 2D izdüşümde Pisagor uygulaması gerekir.",
            attentionPoints: "Kürenin kesitinin bir daire olduğunu görmek. 'En yakın' ve 'en uzak' mesafelerin küre merkeziyle ilişkisini doğru kurmak (d-R ve d+R). Kırılan parçanın küreye teğet olduğu durumu ve oluşan dik üçgeni görmek.",
            toc: "6.1.1",
            solutionSteps: `
                <p>Verilenler:</p>
                <ul>
                    <li>Direğin toplam uzunluğu: 14 m.</li>
                    <li>Kırılma yüksekliği (yerden, P noktası): 8 m.</li>
                    <li>Kırılan parçanın uzunluğu = 14 - 8 = 6 m.</li>
                    <li>Kırılma noktasının (P) taşa en yakın uzaklığı: 2 m.</li>
                    <li>Kırılma noktasının (P) taşa en uzak uzaklığı: 8 m.</li>
                </ul>
                <p>Küre merkezi O, yarıçapı R olsun. Kırılma noktasının (P) küre merkezine uzaklığı d olsun.</p>
                <ol>
                    <li><strong>Kürenin Yarıçapını (R) ve Kırılma Noktasının Küre Merkezine Uzaklığını (d) Bulma:</strong>
                        <ul>
                            <li>d - R = 2 m (P'den küre yüzeyine en yakın mesafe)</li>
                            <li>d + R = 8 m (P'den küre yüzeyine en uzak mesafe)</li>
                            <li>Bu iki denklemi taraf tarafa toplarsak: 2d = 10 => d = 5 m. (P noktasının küre merkezi O'ya uzaklığı)</li>
                            <li>Denklemlerden birinde d=5 yerine konulursa: 5 - R = 2 => R = 3 m. (Kürenin yarıçapı)</li>
                        </ul>
                    </li>
                    <li><strong>Kırılan Parçanın Küreyle Teması:</strong>
                        <ul>
                            <li>Kırılan parça, P noktasından başlayıp küreye T noktasında teğet olsun. Kırılan parçanın ucu U olsun (P-T-U doğrusal).</li>
                            <li>ΔPTO dik üçgendir (OT ⊥ PT, çünkü yarıçap teğete değme noktasında diktir).</li>
                            <li>|OP| = d = 5 m (hipotenüs). |OT| = R = 3 m (dik kenar).</li>
                            <li>Pisagor teoreminden: |PT|² + |OT|² = |OP|² => |PT|² + 3² = 5² => |PT|² + 9 = 25 => |PT|² = 16.</li>
                            <li>|PT| = 4 m.</li>
                        </ul>
                    </li>
                    <li><strong>Kırılan Parçanın Ucunun (U) Konumu:</strong>
                        <ul>
                            <li>Kırılan parçanın toplam uzunluğu |PU| = 6 m.</li>
                            <li>|PT| = 4 m olduğuna göre, parçanın T'den sonraki kısmı |TU| = |PU| - |PT| = 6 - 4 = 2 m.</li>
                        </ul>
                    </li>
                    <li><strong>U Noktasının Küre Merkezine (O) Uzaklığı (|OU|):</strong>
                        <ul>
                            <li>ΔOTU dik üçgendir (çünkü OT ⊥ PTU). |OT|=3 m, |TU|=2 m.</li>
                            <li>Pisagor teoreminden: |OU|² = |OT|² + |TU|² = 3² + 2² = 9 + 4 = 13.</li>
                            <li>|OU| = √13 m.</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>Doğru Cevap: A) √13</strong></p>
            `
        },
        {
            id: "q26_p6", // Corresponds to PDF Soru 26, Sayfa 6
            title: "Soru 4 (Çember ve Eş Dikdörtgenler)",
            imageSrc: "images/soru_5.png", // Updated to match video/explorer
            topics: "Çemberin Temel Elemanları, Dikdörtgen Özellikleri, Pisagor Teoremi.",
            whyChallenging: "Eş dikdörtgenler ve bu dikdörtgenlerin köşelerinden geçen bir çember söz konusu. Noktalar arası uzaklığı bulmak için, şekilleri bir koordinat sistemine oturtmak veya geometrik özellikleri (yarıçapların eşitliği, Pisagor) dikkatlice kullanarak denklem kurmak gerekebilir.",
            attentionPoints: "Eş dikdörtgenlerin kenar uzunluklarını doğru belirlemek. Çemberin merkezini ve yarıçapını kullanarak denklemler oluşturmak. İstenen uzaklık için uygun bir dik üçgen oluşturup Pisagor uygulamak.",
            toc: "5.1.1, 5.1.2",
            solutionSteps: `
                <p>Verilenler: O merkezli çember A ve D noktalarından geçiyor. OABC ve ODEF eş dikdörtgenler. |AB|=3 cm, |BG|=1 cm.</p>
                <ol>
                    <li><strong>Yarıçapı (R) Bulma:</strong>
                        <ul>
                            <li>OABC dikdörtgen olduğundan |OC| = |AB| = 3 cm.</li>
                            <li>A, D, G noktaları çember üzerinde olduğundan |OA| = |OD| = |OG| = R (çemberin yarıçapı).</li>
                            <li>OABC dikdörtgeninde |BC| = |OA| = R.</li>
                            <li>|CG| = |BC| - |BG| = R - 1 cm.</li>
                            <li>OCG dik üçgeninde Pisagor teoremi: |OC|² + |CG|² = |OG|²
                                => 3² + (R-1)² = R²
                                => 9 + R² - 2R + 1 = R²
                                => 10 - 2R = 0 => 2R = 10 => R = 5 cm.</li>
                        </ul>
                    </li>
                    <li><strong>Eş Dikdörtgenlerin Kenar Uzunlukları:</strong>
                        <ul>
                            <li>OABC'nin kenarları: |OC|=3 cm, |OA|=R=5 cm.</li>
                            <li>ODEF eş dikdörtgen olduğundan, kısa kenarı 3 cm, uzun kenarı 5 cm'dir.</li>
                            <li>Şekle göre, ODEF dikdörtgeninde |OF|=3 cm (OC gibi) ve |FE|=5 cm (OA gibi) olmalıdır.</li>
                        </ul>
                    </li>
                    <li><strong>Noktaların Koordinatlarını Belirleme (Orijin O(0,0)):</strong>
                        <ul>
                            <li>O=(0,0).</li>
                            <li>OABC'den: A=(5,0), B=(5,3), C=(0,3).</li>
                            <li>ODEF'den: F=(-3,0) (veya (0,-3) olabilir, şekle göre x ekseni üzerinde). Şekilde F, O'nun solunda, E, F'nin üstünde. E=(-3,5).</li>
                        </ul>
                    </li>
                    <li><strong>B ile E Noktaları Arasındaki Uzaklığı Hesaplama:</strong>
                        <ul>
                            <li>B noktasının koordinatları: (5,3).</li>
                            <li>E noktasının koordinatları: (-3,5).</li>
                            <li>|BE| = √[(5 - (-3))² + (3 - 5)²] = √[(5+3)² + (-2)²] = √[8² + 4] = √[64 + 4] = √68.</li>
                            <li>|BE| = √(4 * 17) = 2√17 cm.</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>Doğru Cevap: E) 2√17</strong></p>
            `
        },
        {
            id: "q8_p2", // Corresponds to PDF Soru 8, Sayfa 2
            title: "Soru 5 (Kare ve Kiriş)",
            imageSrc: "images/soru_3.png", // Updated to match video/explorer
            topics: "Çemberin Temel Elemanları (Kiriş), Kare özellikleri, Çemberde Uzunluk, Pisagor Teoremi.",
            whyChallenging: "Bir kare ile çemberin kesişimi ve bilinmeyen bir uzunluğun (DK) bulunması isteniyor. Çemberin yarıçapını bulmak için verilen bilgileri (E noktasının merkeze uzaklığı, karenin kenarı) ve Pisagor teoremini birden fazla kez kullanmayı gerektirir.",
            attentionPoints: "Merkezden kirişe inen dikmenin kirişi ikiye böldüğünü unutmamak. Yarıçapı doğru hesaplamak için doğru dik üçgenleri kurmak. Verilen tüm uzunlukları ve geometrik ilişkileri dikkatlice kullanmak.",
            toc: "5.1.1 (Kiriş), 5.1.2 (Kiriş özellikleri)",
            solutionSteps: `
                <p>Verilenler: O merkezli bir çember ile ABCD karesi. AB kenarı çemberin bir kirişi. CD kenarının orta noktası E. Karenin bir kenarı 8 cm. E noktasının çemberin merkezine uzaklığı |OE| = 11 cm. [OE] ile çemberin kesim noktası K.</p>
                <ol>
                    <li><strong>Merkezin Konumu ve Yarıçap (R):</strong>
                        <ul>
                            <li>O'dan AB'ye indirilen dikme AB'yi ortalar, bu dikmenin ayağı M olsun. |AM| = |MB| = 8/2 = 4 cm.</li>
                            <li>O'dan CD'ye indirilen dikme CD'yi ortalar. E zaten CD'nin orta noktası olduğu için bu dikme OE üzerinde veya OE'nin bir parçasıdır. O, M, E noktaları doğrusaldır.</li>
                            <li>ABCD kare olduğundan AB ile CD arası dik uzaklık 8 cm'dir. Yani |ME| = 8 cm.</li>
                            <li>M, O, E noktalarının doğrusal dizilişi için 3 durum vardır. O'nun AB ve CD arasında olması |OM|+|OE|=8 ile çelişir.
                            Video çözümüne göre O, AB'ye CD'den daha yakındır. Yani O-M-E sıralaması veya M-O-E sıralaması mümkün değil.
                            Sıralama: AB kirişi, sonra O merkezi, sonra CD kirişi (E noktası üzerinde).
                            |OM| = x dersek, |OE| = 11 cm. O'dan CD'ye olan dik uzaklık |OH<sub>CD</sub>| olsun.
                            Video: M, O, E doğrusal ve O, M ile E'nin dışında, AB'ye daha yakın. |OM|=x, |ME|=8. |OE|=11. Bu durumda x+8=11 => x=3 cm. Yani |OM|=3 cm.</li>
                            <li>ΔOMA dik üçgeninde: R² = |OM|² + |AM|² = 3² + 4² = 9 + 16 = 25.</li>
                            <li>R = 5 cm.</li>
                        </ul>
                    </li>
                    <li><strong>K Noktasının Konumu:</strong>
                        <ul>
                            <li>K noktası, [OE] doğru parçası üzerinde ve çember üzerindedir. |OE|=11 cm, R=|OK|=5 cm. K, O ile E arasındadır.</li>
                        </ul>
                    </li>
                    <li><strong>|DK| Uzunluğunu Bulma:</strong>
                        <ul>
                            <li>Koordinat sistemi kullanalım: O=(0,0). M=(0,3) (OM=3, M yukarıda). AB doğrusu y=3.</li>
                            <li>E noktası: M'den 8 birim yukarıda olacak şekilde E=(0, 3+8) = (0,11). |OE|=11. Bu dizilim doğru.</li>
                            <li>CD doğrusu y=11. D noktasının x koordinatı -4 veya 4'tür. D=(-4,11).</li>
                            <li>K noktası: OE üzerinde, O'dan R=5 birim uzaklıkta. K=(0,5).</li>
                            <li>|DK| = √[(-4-0)² + (11-5)²] = √[(-4)² + 6²] = √[16 + 36] = √52.</li>
                            <li>|DK| = √(4 * 13) = 2√13 cm.</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>Doğru Cevap: B) 2√13</strong></p>
            `
        },
        {
            id: "q6_new",
            title: "Soru 6 AYT (Çemberde Uzunluk - Kiriş ve Yay Orta Noktaları)",
            imageSrc: "images/soru_6.png",
            topics: "Çemberde Kiriş, Apotem (Kirişe Uzaklık), Çemberde Açılar (Dik Açı), Pisagor Teoremi, Çap.",
            whyChallenging: "2023 AYT sınavının en zorlayıcı sorularından birisiydi. Verilen dikliği kullanarak çapı ve dolayısıyla başka bir dik açıyı tespit etmek. Kiriş ve yay orta noktalarını birleştiren kırmızı doğru parçasının uzunluğunu apotem ve yarıçap cinsinden ifade etmek. İki ayrı diklik durumundan Pisagor benzeri denklemler kurup çözmeyi gerektirir.",
            attentionPoints: "BC ⊥ CD verilmişse BCD açısının 90° olduğunu ve bunun BD'yi çap yaptığını görmek. BD çap ise BAD açısının da 90° olduğunu fark etmek. Kirişin orta noktası ile yayın orta noktası arasındaki uzaklığın, R - apotem (merkezden kirişe uzaklık) olduğunu bilmek. Yarıçapı (R) bulduktan sonra ikinci diklik durumu için denklemi doğru kurmak.",
            toc: "5.1.1 (Kiriş), 5.1.2 (Kiriş Özellikleri), 5.1.3 (Apotem), 5.2.1 (Merkez Açı, Çevre Açı), 5.2.3 (Çapı Gören Çevre Açı)",
            solutionSteps: `
                <p>Verilenler: A, B, C, D noktaları çember üzerinde. BC ve CD kirişleri diktir (BC ⊥ CD).
                Şekil 2'deki kırmızı doğru parçaları, kirişlerin orta noktaları ile yayların orta noktalarını birleştirir. Bu parçaların uzunlukları (h) sırasıyla:
                h<sub>AB</sub> = 1 birim
                h<sub>BC</sub> = 5 birim
                h<sub>CD</sub> = 10 birim
                h<sub>DA</sub> = x birim (sorulan)
                </p>
                <p>Çemberin yarıçapı R olsun. Bir kirişin merkezden uzaklığına apotem (a) denir. Kirişin orta noktası ile yayın orta noktası arasındaki kırmızı parçanın uzunluğu h = R - a ilişkisiyle verilir. Dolayısıyla, her kiriş için apotem a = R - h olur.</p>
                <ol>
                    <li><strong>Apotemlerin Hesaplanması:</strong>
                        <ul>
                            <li>a<sub>AB</sub> = R - h<sub>AB</sub> = R - 1</li>
                            <li>a<sub>BC</sub> = R - h<sub>BC</sub> = R - 5</li>
                            <li>a<sub>CD</sub> = R - h<sub>CD</sub> = R - 10</li>
                            <li>a<sub>DA</sub> = R - h<sub>DA</sub> = R - x</li>
                        </ul>
                    </li>
                    <li><strong>Geometrik Özelliklerin Kullanımı ve Yarıçapın (R) Bulunması:</strong>
                        <ul>
                            <li>BC ⊥ CD verildiğinden, ∠BCD = 90°.</li>
                            <li>ABCD bir kirişler dörtgeni (cyclic quadrilateral) olduğundan, ∠BCD = 90° ise BD kirişi çemberin çapıdır. (Çapı gören çevre açı 90°'dir, ve tersi de geçerlidir).</li>
                            <li>Eğer O merkez, M<sub>BC</sub> BC'nin orta noktası ve M<sub>CD</sub> CD'nin orta noktası ise, OM<sub>BC</sub> ⊥ BC ve OM<sub>CD</sub> ⊥ CD olur. OM<sub>BC</sub> = a<sub>BC</sub> ve OM<sub>CD</sub> = a<sub>CD</sub>.</li>
                            <li>OM<sub>BC</sub>CM<sub>CD</sub> dörtgeninde ∠M<sub>BC</sub>CM<sub>CD</sub> = 90°, ∠OM<sub>BC</sub>C = 90°, ∠OM<sub>CD</sub>C = 90° olduğundan bu bir dikdörtgendir.</li>
                            <li>Bu dikdörtgende OC köşegendir. OC aynı zamanda çemberin yarıçapı R'dir.</li>
                            <li>Dikdörtgende Pisagor teoreminden: OM<sub>BC</sub>² + OM<sub>CD</sub>² = OC² (çünkü OM<sub>CD</sub> = M<sub>BC</sub>C).</li>
                            <li>Yani, a<sub>BC</sub>² + a<sub>CD</sub>² = R².</li>
                            <li>(R - 5)² + (R - 10)² = R²</li>
                            <li>(R² - 10R + 25) + (R² - 20R + 100) = R²</li>
                            <li>2R² - 30R + 125 = R²</li>
                            <li>R² - 30R + 125 = 0</li>
                            <li>Bu denklemi çarpanlarına ayırırsak: (R - 5)(R - 25) = 0.</li>
                            <li>R = 5 veya R = 25.</li>
                            <li>Eğer R = 5 ise, a<sub>CD</sub> = R - 10 = 5 - 10 = -5 olur. Apotem negatif olamayacağından R = 5 geçerli değildir.</li>
                            <li>Bu durumda R = 25 birimdir.</li>
                        </ul>
                    </li>
                    <li><strong>x Değerinin Bulunması:</strong>
                        <ul>
                            <li>BD çap olduğundan, ∠BAD = 90° (çapı gören çevre açı). Dolayısıyla AB ⊥ DA.</li>
                            <li>BC ⊥ CD durumunda kullandığımız aynı mantıkla (a<sub>XY</sub>² + a<sub>YZ</sub>² = R²), AB ⊥ DA olduğundan:</li>
                            <li>a<sub>AB</sub>² + a<sub>DA</sub>² = R²</li>
                            <li>(R - 1)² + (R - x)² = R²</li>
                            <li>R = 25 değerini yerine koyarsak:</li>
                            <li>(25 - 1)² + (25 - x)² = 25²</li>
                            <li>24² + (25 - x)² = 25²</li>
                            <li>576 + (25 - x)² = 625</li>
                            <li>(25 - x)² = 625 - 576</li>
                            <li>(25 - x)² = 49</li>
                            <li>Bu durumda, 25 - x = 7 veya 25 - x = -7.</li>
                            <li>Eğer 25 - x = 7 ise, x = 25 - 7 = 18. Bu durumda a<sub>DA</sub> = R - x = 25 - 18 = 7. Bu geçerlidir (0 < a<sub>DA</sub> < R).</li>
                            <li>Eğer 25 - x = -7 ise, x = 25 + 7 = 32. Bu durumda a<sub>DA</sub> = R - x = 25 - 32 = -7. Apotem negatif olamaz, bu geçersizdir.</li>
                            <li>Dolayısıyla x = 18 birimdir.</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>Doğru Cevap: E) 18</strong></p>
            `
        }

    ];

    questionsData.forEach(q => {
        const card = document.createElement('article');
        card.className = 'question-card';
        card.id = q.id;

        let displayTitle = q.title;

        card.innerHTML = `
            <h2>${displayTitle}</h2>
            <img src="${q.imageSrc}" alt="${displayTitle}" class="question-image">
            <div class="actions">
                <button class="toggle-button info-btn" data-target="info-${q.id}">
                    <i class="fas fa-info-circle"></i> Bilgi Göster
                </button>
                <button class="toggle-button solution-btn" data-target="solution-${q.id}">
                    <i class="fas fa-lightbulb"></i> Cevabı Göster
                </button>
            </div>
            <div id="info-${q.id}" class="content-area info-content" style="display: none;">
                <h3>Soru Hakkında Bilgiler</h3>
                <p><strong>Konular:</strong> ${q.topics}</p>
                <p><strong>Neden Zorlayıcı:</strong> ${q.whyChallenging}</p>
                <p><strong>Dikkat Edilmesi Gerekenler:</strong> ${q.attentionPoints}</p>
                <p><strong>İlgili ToC Maddeleri:</strong> ${q.toc}</p>
            </div>
            <div id="solution-${q.id}" class="content-area solution-content" style="display: none;">
                <h3>Detaylı Çözüm</h3>
                ${q.solutionSteps}
            </div>
        `;
        questionsContainer.appendChild(card);
    });

    const toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const targetElement = document.getElementById(targetId);
            
            const isOpening = targetElement.style.display === 'none';
            targetElement.style.display = isOpening ? 'block' : 'none';
            
            const iconClass = button.classList.contains('info-btn') ? 'fa-info-circle' : 'fa-lightbulb';
            const eyeIcon = 'fa-eye-slash';
            const originalText = button.classList.contains('info-btn') ? 'Bilgi' : 'Cevabı';

            if (isOpening) {
                button.innerHTML = `<i class="fas ${eyeIcon}"></i> ${originalText} Gizle`;
            } else {
                button.innerHTML = `<i class="fas ${iconClass}"></i> ${originalText} Göster`;
            }
        });
    });

    // Dark Mode Toggle Logic
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const moonIcon = '<i class="fas fa-moon"></i>';
    const sunIcon = '<i class="fas fa-sun"></i>';

    const setInitialTheme = () => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            body.classList.add('dark-mode');
            if(darkModeToggle) darkModeToggle.innerHTML = sunIcon;
        } else {
            // Default to light mode if no preference or preference is light
            body.classList.remove('dark-mode'); // Ensure it's not there if set to light
            if(darkModeToggle) darkModeToggle.innerHTML = moonIcon;
        }
    };

    setInitialTheme(); // Set theme on initial load

    if(darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            
            // Add a class to trigger icon animation
            darkModeToggle.classList.add('icon-changing');
            // Remove class after animation to allow re-triggering
            setTimeout(() => darkModeToggle.classList.remove('icon-changing'), 300); // Match CSS transition duration

            if (isDarkMode) {
                localStorage.setItem('theme', 'dark');
                darkModeToggle.innerHTML = sunIcon;
            } else {
                localStorage.setItem('theme', 'light');
                darkModeToggle.innerHTML = moonIcon;
            }
        });
    }
});