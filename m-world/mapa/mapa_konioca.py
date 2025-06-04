# -*- coding: utf-8 -*-
import folium

# Mapa base centralizado no Brasil com atribuição
mapa = folium.Map(location=[-15.793889, -47.882778], zoom_start=4, tiles='OpenStreetMap')


# Dicionário de estados para região
estado_para_regiao = {
    'AC': 'Norte', 'AP': 'Norte', 'AM': 'Norte', 'PA': 'Norte', 'RO': 'Norte', 'RR': 'Norte', 'TO': 'Norte',
    'AL': 'Nordeste', 'BA': 'Nordeste', 'CE': 'Nordeste', 'MA': 'Nordeste', 'PB': 'Nordeste',
    'PE': 'Nordeste', 'PI': 'Nordeste', 'RN': 'Nordeste', 'SE': 'Nordeste',
    'DF': 'Centro-Oeste', 'GO': 'Centro-Oeste', 'MT': 'Centro-Oeste', 'MS': 'Centro-Oeste',
    'ES': 'Sudeste', 'MG': 'Sudeste', 'RJ': 'Sudeste', 'SP': 'Sudeste',
    'PR': 'Sul', 'RS': 'Sul', 'SC': 'Sul'
}

# Cores por região
cores_por_regiao = {
    'Norte': 'lightgreen',
    'Nordeste': 'lightgreen',
    'Centro-Oeste': 'lightgreen',
    'Sudeste': 'lightgreen',
    'Sul': 'lightgreen'
}

# Criar grupos por região
grupos_por_regiao = {
    regiao: folium.FeatureGroup(name=regiao)
    for regiao in cores_por_regiao.keys()
}

# Lista de unidades Konioca
unidades = (
    {'nome': 'Konioca Berrini', 'lat': -23.607199, 'lon': -46.693345, 'estado': 'SP'},
    {'nome': 'Konioca São José dos Campos', 'lat': -23.200021, 'lon': -46.693345, 'estado': 'SP'},
    {'nome': 'Konioca Barreiras - Ba', 'lat': -13.005452, 'lon': -38.523945, 'estado': 'BA'},
    {'nome': 'Konioca Passeios das Águas', 'lat': -16.629259, 'lon': -49.278718, 'estado': 'GO'},
    {'nome': 'Konioca Nova Iguaçu', 'lat': -22.758489, 'lon': -43.449647, 'estado': 'RJ'},
    {'nome': 'Konioca Recife', 'lat': -8.036914, 'lon': -34.871729, 'estado': 'CE'},
    {'nome': 'Konioca Divinopolis', 'lat': -20.126946, 'lon': -44.882083, 'estado': 'MG'},
    {'nome': 'Konioca Porto Alegre', 'lat': -30.024979, 'lon': -51.161368, 'estado': 'RS'},
    {'nome': 'Konioca Fortaleza - Nova Localição em breve', 'lat': -3.738546, 'lon': -38.471006, 'estado': 'CE'},
    {'nome': 'Konioca Shopping Barra - BA', 'lat': -13.005530, 'lon': -38.523936, 'estado': 'BA'},
    {'nome': 'Konioca Taubaté', 'lat': -23.012294, 'lon': -45.597106, 'estado': 'SP'},
    {'nome': 'Konioca Santa Maria', 'lat': -29.689825, 'lon': -53.793714, 'estado': 'RS'},
    {'nome': 'Konioca Uberaba', 'lat': -19.763630, 'lon': -47.949949, 'estado': 'MG'},
    {'nome': 'Konioca Campina Grande', 'lat': -7.234036, 'lon': -35.868686, 'estado': 'PB'},
    {'nome': 'Konioca Cuiabá', 'lat': -15.574679, 'lon': -56.072313, 'estado': 'MT'},
    {'nome': 'Konioca Varzea Grande', 'lat': -15.652291, 'lon': -56.122985, 'estado': 'MT'},
    {'nome': 'Konioca Vilhenas', 'lat': -12.704163, 'lon': -60.122966, 'estado': 'RO'},
    {'nome': 'Konioca Campo Grande', 'lat': -20.457441, 'lon': -54.586297, 'estado': 'MS'},
    {'nome': 'Konioca Belém', 'lat': -1.445180, 'lon': -48.489048, 'estado': 'PA'},
    {'nome': 'Konioca Natal', 'lat': -5.865191, 'lon': -35.185635, 'estado': 'RN'},
    {'nome': 'Konioca Volta Redonda', 'lat': -22.517592, 'lon': -44.107617, 'estado': 'RJ'},
    {'nome': 'Konioca Açailândia', 'lat': -4.954485, 'lon': -47.490294, 'estado': 'MA'},
    {'nome': 'Konioca Barra da Tijuca', 'lat': -23.00128086668291, 'lon': -43.364827005580544, 'estado': 'RJ'}
)

# Adicionar marcadores
for unidade in unidades:
    estado = unidade['estado']
    regiao = estado_para_regiao.get(estado, 'Desconhecido')
    cor = cores_por_regiao.get(regiao, 'gray')

    link_rota = f"https://www.google.com/maps/dir/?api=1&destination={unidade['lat']},{unidade['lon']}"
    popup_html = f'<a href="{link_rota}" target="_blank">{unidade["nome"]}</a>'

    folium.Marker(
        location=[unidade['lat'], unidade['lon']],
        popup=folium.Popup(popup_html, max_width=250),
        icon=folium.Icon(color=cor)
    ).add_to(grupos_por_regiao[regiao])

# Adicionar os grupos ao mapa
for grupo in grupos_por_regiao.values():
    grupo.add_to(mapa)

# Controle de camadas
folium.LayerControl(collapsed=False).add_to(mapa)

# Salvar
mapa.save("mapa_konioca.html")
print("Mapa salvo como 'mapa_konioca.html'")
